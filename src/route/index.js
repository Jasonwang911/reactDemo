import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Index from './../index/index';
import List from './../list';
import Detail from './../detail';
import Page404 from './../page404';
import Nav from './../nav'

export default class Routers extends Component {
    render() {
        return (
            <HashRouter>
                {/* <Switch> */}
                    {/* <Route exact component={Nav}> */}
                    <Nav>
                        <Route path="/index" component={Index} exact />
                        <Route pah="/list" component={List} exact />
                            {/* <Route path="/detail" component={Detail} exact /> */}
                        <Route path="*" component={Page404} exact />
                    </Nav>
                       
                    {/* </Route> */}
                {/* </Switch> */}
            </HashRouter>
        )
    }
}