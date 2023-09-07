import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/store.js";
import { speciesReducer, phylumReducer, classReducer, orderReducer, familyReducer, genusReducer, kingdomReducer } from "./species/storeSpecies.js";

const rootReducer = combineReducers({
  auth: authReducer,
  species: speciesReducer,
  phylum: phylumReducer,
  kingdom: kingdomReducer,
  classType: classReducer,
  order: orderReducer,
  family: familyReducer,
  genus: genusReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
