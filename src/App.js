import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Routes, Route } from 'react-router-dom'

/* import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
  getCurrentUser,
} from './utils/firebase/firebase.utils' */

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
/* import { setCurrentUser } from './store/user/user.action' */
import { checkUserSession } from './store/user/user.action'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    /* removed to firebase for saga */
    /* const unsubcribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubcribe */
    /* getCurrentUser() */
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes> 
  )
}

export default App
