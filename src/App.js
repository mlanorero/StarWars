import { Fragment } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './views/home';
import Header from './components/Navbar';
import People from './views/people';
import PeopleDetail from './views/peopleDetails';
import Planets from './views/planets';
import PlanetDetail from './views/planetDetail';
import NotFound from './views/notfound';
import injectContext from './store/appContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(  
    <>
    <BrowserRouter>
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/people/' element={<People/>}/> 
        <Route path='/people/:id' element={<PeopleDetail/>}/>
        <Route exact path='/planets/' element={<Planets/>}/> 
        <Route path='/planets/:id' element={<PlanetDetail/>}/>
        <Route component={NotFound}></Route>
      </Routes>
    </Fragment>
    </BrowserRouter>
    </>
  )
}

export default injectContext(App);
