import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {writeBatch,collection,getDocs,query,where,documentId,addDoc,} from "firebase/firestore";

import { db } from "../../services/firebase/firebaseConfig";
import {CartContext} from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: new Date(),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "items");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stock = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;
        if (stock >= prodQuantity) {
          batch.update(doc.ref, { stock: stock - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="title has-text-centered">Checkout</h1>
      {loading ? (
        <h2 className="is-subtitle has-text-centered">Se está generando su orden...</h2>
      ) : orderId ? (
        <div className="is-subtitle has-text-centered">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: <span>{orderId}</span></p>
          <Link className="button is-link mt-5" to="/">Volver al inicio</Link>
        </div>
      ) : (
        <CheckoutForm onConfirm={createOrder} />
      )}
    </div>
  );
};

export default Checkout;