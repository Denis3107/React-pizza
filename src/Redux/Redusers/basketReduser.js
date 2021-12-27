const SET_PIZZA_BASKET = "SET_PIZZA_BASKET"
const CLEAR_ALL = "CLEAR_ALL"
const REMOVE_ITEM = "REMOVE_ITEM"
const PLUS_ITEM = "PLUS_ITEM"
const MINUS_ITEM = "MINUS_ITEM"


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

export const basketReduser = (state = initialState, action) => {
    switch (action.type){

        case SET_PIZZA_BASKET: {
            const currentPizzaItems = !state.items[action.pizza.id]
                ? [action.pizza]
                : [...state.items[action.pizza.id].items, action.pizza];

            const newItems = {
                ...state.items,
                [action.pizza.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case CLEAR_ALL:{
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }

        case REMOVE_ITEM:{
            const newItems = {
                ...state.items,
            }
            const currentTotalPrice = newItems[action.id].totalPrice
            const currentTotalCount = newItems[action.id].items.length
            delete newItems[action.id]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case PLUS_ITEM: {
            const newObjItems = [
                ...state.items[action.id].items,
                state.items[action.id].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case MINUS_ITEM: {
            const oldItems = state.items[action.id].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.id].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.id]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        default: return state
    }
}

export const setSortAction = (pizza) => ({type:SET_PIZZA_BASKET, pizza})
export const ClearAllAction = () => ({type:CLEAR_ALL})
export const removeItemAction = (id) => ({type:REMOVE_ITEM, id: id})
export const plusItemAction = (id) => ({type:PLUS_ITEM, id: id})
export const minusItemAction = (id) => ({type:MINUS_ITEM, id: id})
