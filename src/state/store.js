import { createStore } from "redux";
import reducer from "./Counter.reducer";
const store = createStore(reducer);

export default store;
