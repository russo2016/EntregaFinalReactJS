import {useState} from "react";

const CheckoutForm = ({onConfirm}) =>{
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name,phone,email
        }

        onConfirm(userData)
    }

    return(
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                </label>
                <input type="text" value={name} onChange={({target}) => setName(target.value)}/>
                <label>
                    Telefono
                </label>
                <input type="text" value={phone} onChange={({target}) => setPhone(target.value)}/>
                <label>
                    e-mail
                </label>
                <input type="text" value={email} onChange={({target}) => setEmail(target.value)}/>
            </form>
        </div>
    )
}

export default CheckoutForm