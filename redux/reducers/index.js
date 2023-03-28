import getDataNF from "./getData";
import isLogged from "./isLogged";
import { combineReducers } from "redux";

const allReducres = combineReducers({
  DataNewFeed: getDataNF,
  Logged: isLogged,
});
export default allReducres;
