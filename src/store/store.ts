import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    mainData: mainReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;