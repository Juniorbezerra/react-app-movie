import React from 'react'
import { Switch, Route,BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/detalhes/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
