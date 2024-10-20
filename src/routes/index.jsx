import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NowPlaying from '../pages/NowPlaying'
import Popular from '../pages/Popular'
import TopRated from '../pages/TopRated'
import UpComing from '../pages/UpComing'
import { PATH } from '../hook/usePath'

function CustomRoutes() {
    const routeList = [
        {
            id:1,
            path:PATH.nowPlaying,
            element:<NowPlaying/>
        },
        {
            id:2,
            path:PATH.popular,
            element:<Popular/>
        },
        {
            id:3,
            path:PATH.topRated,
            element:<TopRated/>
        },
        {
            id:4,
            path:PATH.upComing,
            element:<UpComing/>
        },
    ]
  return (
  <Routes>
    {routeList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
  </Routes>
  )
}

export default CustomRoutes