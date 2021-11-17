import axios from "axios";

const GetPizzas = ({category,sortBy}) => {
  const {type, order} = {...sortBy}
  return axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${type}&_order=${order}`)
}

export default GetPizzas