import NavBar from "./components/NavBar/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App(){
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Espero que le guste!"}/>
    </div>
  )
}

export default App;
