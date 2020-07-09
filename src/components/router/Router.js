import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../../page/Home';
import Description from '../Description/Description'
import Shop from '../../components/shop/Shop';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/Description" component={ Description}/>
            <Route exact path="/Shop" component={ Shop }/>
        </Switch>
    </BrowserRouter>
)
export default Router;
