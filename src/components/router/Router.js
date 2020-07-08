import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../../page/Home';
import Description from '../Description/Description'

const Router = () => (
    <BrowserRouter>
        <Switch >
            <Route exact path="/" component={ Home }/>
            <Route exact path="/Description" component={ Description}/>
        </Switch>
    </BrowserRouter>
)
export default Router;