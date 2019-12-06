import {combineReducers, createStore} from "redux";
import repositoryPageReducer from "./repositoryPageReducer";


let reducers = combineReducers({
    repositoryPage: repositoryPageReducer
});
let store = createStore(reducers);

export default store;