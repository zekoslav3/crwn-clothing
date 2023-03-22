import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CategoriesPreview from '../categories-preview/categories-preview.componet'
import Category from '../category/category.component'
/* import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/category.action' */
/* import { fetchCategoriesAsync } from '../../store/categories/category.action'*/
import { fetchCategoriesStart } from '../../store/categories/category.action'

const Shop = () => {
  const dispatch = useDispatch()

  /* useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories')
      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
  }, []) */

  useEffect(() => {
    /* dispatch(fetchCategoriesAsync()) */
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
