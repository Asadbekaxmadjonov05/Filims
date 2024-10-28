import React from 'react'
import './App.css'
import CustomRoutes from './routes'
import Menu from './components/Menu'
import CustomMenu from './components/Menu'

const App = () => {
  return (
    <div className='flex'>
      <CustomMenu />
      <CustomRoutes />
    </div>
  )
}

export default App

