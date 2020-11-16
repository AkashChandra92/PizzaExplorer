import { combineReducers } from "redux";

import pizzaListReducer from "./PizzaListreducer";
import selectedPizzaReducer from "./SelectedPizzaReducer";

export default combineReducers({
  pizzaList: pizzaListReducer,
  selectedPizza: selectedPizzaReducer
});