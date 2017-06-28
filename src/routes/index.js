import React from 'react'
import { Route, Switch } from 'react-router'
import App from 'X_pages/App';
import Appa from 'X_pages/Appa';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/App" component={App}/>
            <Route path="/Appa" component={Appa}/>
        </Switch>
    </div>
)

export default routes;
