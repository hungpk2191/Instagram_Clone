import { createStore } from "redux";
import allReducres from "../reducers/index";
const store = createStore(allReducres);
export default store;
