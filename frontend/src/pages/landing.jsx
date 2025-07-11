import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav className='navBar'>
                <div className='navHeader'>
                    <h1 className='brandTitle'>Personal <span className='highlight'>Meet</span></h1>
                </div>
                <div className='navList'>
                    <button className='navBtn' onClick={() => router("/aljk23")}>Join as Guest</button>
                    <button className='navBtn' onClick={() => router("/auth")}>Register</button>
                    <button className='loginBtn' onClick={() => router("/auth")}>Login</button>
                </div>
            </nav>

            <main className="landingMainContainer">
                <section className='landingText'>
                    <h1>
                        <span className='highlight'>Connect</span> with your loved ones
                    </h1>
                    <p className='subheading'>Bridge any distance with Personal Meet Video Call</p>
                    <div className='getStartedWrapper'>
                        <Link to="/auth" className='getStartedBtn'>Get Started</Link>
                    </div>
                </section>

                <section className='landingImage'>
                    <img src="/mobile.png" alt="Video call on mobile" className='landingImg'/>
                </section>
            </main>
        </div>
    );
}
