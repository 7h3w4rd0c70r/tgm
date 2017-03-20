
import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router';

import Intro from 'components/tgm.jsx';

export default (
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRedirect to='tgm' />
            <Route path='tgm' component={Intro} />
        </Route>
    </Router>
);
