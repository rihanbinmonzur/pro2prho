import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/plugins.css';
import '../assets/style.css';

function Weblayout({children}){
    return (
        
        <div id="main-wrapper" className="section">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}
export default Weblayout;

