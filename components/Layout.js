import React from 'react';
import { Link } from 'react-router-dom';

import { pullRight, h1 } from '../components/Layout.css';

const Layout = ({ children }) => {
    return (
        <div class="container">
          <Link to="/">
                <h1 as="h1" className={h1}>
                    I am a header
                </h1>
            </Link>
            {children}
        </div>
    );
};

export default Layout;


