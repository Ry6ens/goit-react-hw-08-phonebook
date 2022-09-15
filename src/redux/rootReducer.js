import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import { getContactsSlice } from "./contacts/contacts-slice";
import { filterSlice } from "./filter/filter-slice";
import { loaderSlice } from "./loader/loaderSlice";
import { errorSlice } from "./error/errorSlice";

const persistConfig = { key: "token", storage, whitelist: ["token"] };

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: getContactsSlice.reducer,
  filter: filterSlice.reducer,
  loader: loaderSlice.reducer,
  error: errorSlice.reducer,
});
