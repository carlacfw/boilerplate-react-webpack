import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Portfolio from './Portfolio';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
//import s from '../styles/app.style';

export default function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        {/*<Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />*/}
        <Route component={PageNotFound} />

      </Switch>
      <footer><Link to='/'>Home</Link></footer>
    </div>
  );
}
