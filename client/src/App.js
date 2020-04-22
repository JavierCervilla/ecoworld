import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MobileHeader } from './components/MobileHeader';
import { ProductList } from './components/ProductList';
import { PcHeader } from './components/PcHeader';
import {Nosotros} from './components/Nosotros';
import { Contacto } from './components/Contacto';

const App = () => {
  return (
    <Router>
      {window.innerWidth <= 1024 ? <MobileHeader /> : <PcHeader />}
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/contacto' component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
