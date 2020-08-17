// Tienda con los estados para que sean disponibles en nuestra app  === Une todos los archivos (pokeducks.js,userducks)

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoryReducer from "./CategoriesDucks";
import PhotoReducer from "./PhotoDucks";

import UserReducer from "./UserDucks";

const rootReducer = combineReducers({
  categories: CategoryReducer,
  photos: PhotoReducer,
  user: UserReducer,

  //usuarioReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
