import React from 'react';
import UseTitle from '../../Hooks/UseTitle/UseTitle';
import Footer from '../Footer/Footer';
import Aboutbody from './Aboutbody/Aboutbody';
import Aboutheder from './Aboutheder/Aboutheder';

const AboutMe = () => {
    UseTitle('AboutMe') 
    return (
        <div className='bg-black text-lime-500'>


            <Aboutheder />
            <Aboutbody />

            <Footer />
        </div>
    );
};

export default AboutMe;