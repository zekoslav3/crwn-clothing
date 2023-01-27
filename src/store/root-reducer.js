import { combineReducers } from 'redux'

import { userRecuder } from './user/user.reducer'
import { categoriesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'


export const rootReducer = combineReducers({
  user: userRecuder,
  categories: categoriesReducer,
  cart: cartReducer,
})
