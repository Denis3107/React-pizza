import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {

    const [pizzas, setPizzas] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/db.json")
            .then(({data}) => setPizzas(data.pizzas))
    }, [])

  return (
      <div className="wrapper">
        <Header/>
        <Main items = {pizzas}/>
      </div>
  );
}

export default App;
