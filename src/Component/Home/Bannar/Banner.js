import React from 'react';
import profile from '../../../Assets/Body/bodyhed2.jpg'
import UseTitle from '../../../Hooks/UseTitle/UseTitle';
// import JuniorDeveloper from '../../../Assets/pdfload/Junior Developer.pdf'
const Banner = () => {
    UseTitle('Home')
    return (
        <div className="hero min-h-screen" style={

            {
                backgroundImage: `url(${profile})`,
                backgroundSize: 'cover'
            }

        }
        >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold">Coder</h1>
                    <p className="mb-5 font-bold text-xl">My interests are front end development, and I like to create beautiful and performant products with pleasant user experience.</p>
                    <a href="Junior-Developer.pdf"
                    download="Junior-Developer.pdf"
                    >
                        <button className="btn btn-active btn-accent"
                        >Download Resume</button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Banner;