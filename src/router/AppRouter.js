import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage'
import CreateGame from '../components/CreateGame'


export const history = require("history").createBrowserHistory()


const AppRouter = () => {


    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact={true} path='/' component={LandingPage} />
                    <Route path='/create' component={CreateGame}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;