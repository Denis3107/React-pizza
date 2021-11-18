import React, {useEffect} from 'react';
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import LoadingBlock from "./LoadingBlock/LoadingBlock";

const Main = ({pizzas, getPizzasThank,status,sortR, setSortAction, basket}) => {
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

                        status ? pizzas.map(item => <PizzaBlock
                            {...item}
                            setSortAction = {setSortAction}
                            countPizza={basket.items[item.id] && basket.items[item.id].length}
                            key = {item.id}/>) :  Array(8)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index} />)
                    }
                </div>

            </div>
        </div>
    );
};


export default Main;