import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import { inputbox } from '../components/Layout.css';
import '../components/Layout.css';
const Home = () => {
    return (
        <Layout>
            <div as="inputbox" className={inputbox}>
                <input type="text" placeholder={'Search in youtube'} minLength={3}/>
            </div>
            <p>
                <Link to="/dynamic">Lets try some other page too!</Link>
            </p>
        </Layout>
    );
};

export default Home;