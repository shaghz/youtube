import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Layout from './Layout';

const NoMatch = () => {
    return (
        <Layout>
            <i className="fa fa-minus-circle fa-2x" aria-hidden="true"></i>
            <strong>Page not found!</strong>
        </Layout>
    );
};

export default NoMatch;
