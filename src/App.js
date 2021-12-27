import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import Main from "./components/Main/Main";
import {Route} from "react-router-dom";
import Basket from "./components/Basket/Basket";
import {connect} from "react-redux";
import {getPizzasThank} from "./Redux/Redusers/pizzaReduser";
import {
    ClearAllAction,
    minusItemAction,
    plusItemAction,
    removeItemAction,
    setSortAction
} from "./Redux/Redusers/basketReduser";

function App(props) {
    return (
      <div className="wrapper">
          <Header {...props.basket}/>
          <Route path="/" render = {()=><Main {...props}/>}exact />
          <Route path="/basket" render = {()=><Basket {...props.basket}
                                                      ClearAllAction = {props.ClearAllAction}
                                                      removeItemAction = {props.removeItemAction}
                                                      plusItemAction ={props.plusItemAction}
                                                      minusItemAction = {props.minusItemAction}/>} exact />
      </div>
  );
}

let mapStateToProps = (state) => ({
    pizzas: state.pizza.pizzas,
    status: state.pizza.isLoaded,
    sortR: state.sort,
    basket: state.basket
})


export default connect(mapStateToProps,
    {getPizzasThank, setSortAction,ClearAllAction,
                        removeItemAction,plusItemAction,minusItemAction})(App);



