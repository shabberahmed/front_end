import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Logic from './Logic'
import Home from './Home'
const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/one' element={<One/>}></Route>
  <Route path='/two' element={<Two/>}></Route>
  <Route path='/three' element={<Three/>}></Route>
  <Route path='/four' element={<Four/>}></Route>
  <Route path='/logic' element={<Logic/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App