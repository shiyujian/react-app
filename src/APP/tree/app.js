import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
console.log('引入Login1');

export default class App extends Component {
    async componentDidMount() {
        const { default: Login } = await import('../../LoginQH');
        console.log('引入Login2', 99,  Login);
        this.setState({
            Login
        });
    }
    render () {
        console.log('引入Login3');
        const { Login } = this.state || {};
        return <Provider store={store}>
            <BrowserRouter>
                <div style={{height: '100%'}}>
                    {Login && <Route path='/login' component={Login} />}
                </div>
            </BrowserRouter>
        </Provider>;
    }
}