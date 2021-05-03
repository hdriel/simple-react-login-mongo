import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';

import Store from './store';
import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';

const Root = () => {
    const userExists = useSelector(state => !!state.auth.user);
    console.log('userExists: ', userExists);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {
                        userExists
                            ? <App/>
                            : <Redirect to='/signin'/>
                    }
                </Route>
                <Route component={Signin} path='/signin'/>
                <Route component={Signup} path='/signup'/>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Store> <Root/> </Store>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
