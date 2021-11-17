import React, {useEffect} from 'react';
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import {connect} from "react-redux";
import {getPizzasThank} from "../../Redux/Redusers/pizzaReduser";
import LoadingBlock from "./LoadingBlock/LoadingBlock";

const Main = ({pizzas, getPizzasThank,status,sortR}) => {
    const category = [ "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    const sort = [{name:"популярности", type:"popylar",order : "asc"}, {name:"цена по возростанию", type: "price", order : "asc"},{name:"цена по убыванию", type: "price",order : "desc" }]

    useEffect(()=>{
        getPizzasThank(sortR)
    }, [sortR])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items = {category}/>
                    <Sort items = {sort}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {

                        status ? pizzas.map(item => <PizzaBlock {...item} key = {item.id}/>) :  Array(8)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index} />)
                    }
                </div>

            </div>
        </div>
    );
};

let mapStateToProps = (state) => ({
    pizzas: state.pizza.pizzas,
    status: state.pizza.isLoaded,
    sortR: state.sort
})


export default connect(mapStateToProps,{getPizzasThank})(Main);