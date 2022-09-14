import { combineReducers } from "redux";

import authReducer from "./auth/auth-slice";
import { getContactsSlice } from "./contacts/contacts-slice";
import { filterSlice } from "./filter/filter-slice";
import { loaderSlice } from "./loader/loaderSlice";
import { errorSlice } from "./error/errorSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  items: getContactsSlice.reducer,
  filter: filterSlice.reducer,
  loader: loaderSlice.reducer,
  error: errorSlice.reducer,
});
