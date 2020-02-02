import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import { RouterProps } from 'react-router';

import Router from './router/MainRouter';

interface Props extends RouterProps {}

function App(props: Props) {
    return (
        <main>
            <Router />
        </main>
    );
}

export default App;
