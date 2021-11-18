const SET_PIZZA_BASKET = "SET_PIZZA_BASKET"


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

export const basketReduser = (state = initialState, action) => {
    switch (action.type){
        case SET_PIZZA_BASKET:{

            const newItems = {
                ...state.items,
                [action.pizza.id]: !state.items[action.pizza.id]
                    ?[action.pizza]
                    :[...state.items[action.pizza.id], action.pizza]
            }
            return {
                ...state,
                items: newItems,
                totalCount: [].concat(...Object.values(newItems)).length,
                totalPrice: [].concat(...Object.values(newItems))
                    .reduce((sum, obj) => obj.price + sum, 0)
            }
        }

        default: return state
    }
}

export const setSortAction = (pizza) => ({type:SET_PIZZA_BASKET, pizza})
