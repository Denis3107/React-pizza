import React from 'react';
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaBlock from "./PizzaBlock/PizzaBlock";

const Main = ({items}) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items = {[ "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
                    <Sort items = {["популярности","цене", "алфавиту"]}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        items.map(item => <PizzaBlock {...item} key = {item.id}/>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Main;