import axios from "axios";

const GetPizzas = ({category,sortBy}) => {
  const {type, order} = {...sortBy}
  return axios.get(`pizzas?${category !== null ? `category=${category}`: ''}&_sort=${type}&_order=${order}`)
}

export default GetPizzas