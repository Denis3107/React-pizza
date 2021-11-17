const SET_SORT = "SET_SORT"
const SET_CATEGORY = "SET_CATEGORY"

let initialState = {
    category: null,
    sortBy : {
        type:"popylar",
        order : "asc"
    }
}

export const sortReduser = (state = initialState, action) => {
    switch (action.type){
        case SET_SORT:{
            return{...state, sortBy: action.sort}
        }
        case SET_CATEGORY:{
            return{...state, category: action.category}
        }
        default: return state
    }
}

export const setSortAction = (sort) => ({type:SET_SORT, sort})
export const setCategoryAction = (category) => ({type:SET_CATEGORY, category})