import GetPizzas from "../../API/GetPizzas";

const ACTION_GET_PIZZAS = "ACTION_GET_PIZZAS"
const ACTION_SET_LOADED = "ACTION_SET_LOADED"

const initialState = {
    pizzas: [],
    isLoaded: false
}


export const pizzaReduser = (state = initialState, action) => {
    switch (action.type){
        case ACTION_GET_PIZZAS:{
            return{...state, pizzas: [...action.pizzas]}
        }
        case ACTION_SET_LOADED:{
            return{...state, isLoaded: action.status}
        }
        default: return state
    }
}

const actionCreatorGetPizza = (pizzas) => ({type:ACTION_GET_PIZZAS, pizzas})
const actionSetLoaded = (status) => ({type:ACTION_SET_LOADED, status})

export const getPizzasThank = (sort) => {
    return  async (dispatch)=> {
        dispatch(actionSetLoaded(false))
        let response = await GetPizzas(sort)
        dispatch(actionCreatorGetPizza(response.data))
        dispatch(actionSetLoaded(true))

    }
}