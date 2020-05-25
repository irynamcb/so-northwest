import React from 'react';
import { useLoacation } from 'react-router-dom';
import { get } from 'lodash';
import Page404 from './page404';
import Page500 from './page500';

const ErrorHandler = ( { children }) => {
    const location = useLoacation();

    switch (get(location.state, 'errorStatusCode')) {
        case 404:
            return <Page404 />;

        case 500:
            return <Page500 />;
            
        default:
            return children
    }
};

export default ErrorHandler;

