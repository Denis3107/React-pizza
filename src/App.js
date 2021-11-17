import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import Main from "./components/Main/Main";

function App(props) {

    return (
      <div className="wrapper">
        <Header/>
        <Main />
      </div>
  );
}


export default App;



