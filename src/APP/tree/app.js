/**
 * Copyright (c) 2016-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import {
    Auth,
    Header,
    DynamicTabs,
    Footer
} from '_platform/components/layout';

export default class App extends Component {
    async componentDidMount () {
        const { default: Home } = await import('../../Home');
        const { default: Login } = await import('../../LoginQH');
        const { default: Project } = await import('../../Project');
        const { default: Setup } = await import('../../Setup');

        console.log('App');
        this.setState({
            Home,
            Login,
            Project,
            Setup
        });
    }

    render () {
        const {
            Home,
            Login,
            Project,
            Setup
        } =
            this.state || {};
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div style={{ height: '100%' }}>
                        <Route path='/:module?' component={Auth} />
                        <Route path='/:module?' component={Header} />
                        <Route path='/:module?' component={DynamicTabs} />
                        {Home && <Route exact path='/' component={Home} />}
                        {Login && <Route path='/login' component={Login} />}
                        {Project && <Route path='/project' component={Project} />}
                        {Setup && <Route path='/setup' component={Setup} />}
                        <Route path='/:module?' component={Footer} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
