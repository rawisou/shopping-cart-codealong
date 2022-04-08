import {createSlice} from '@reduxjs/toolkit'

const productData = [
    { id: 1,
      title: 'Socks',
      price: 100,
      emoji: '🧦'},
    { id: 2,
      title: 'T-shirts',
      price: 200,
      emoji: '👕 '},
    { id: 3,
      title: 'Pants',
      price: 350,
      emoji: '👖'},
    { id: 4,
      title: 'Dresses',
      price: 550,
      emoji: '👗'}
]

export const products = createSlice({
    name: 'products',
    initialState: productData
})