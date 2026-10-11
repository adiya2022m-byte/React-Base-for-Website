import React from 'react'

const Hero1 = () => {

    return (
        <section className="hero">
            <div className="hero-container ideal-width">

                {/* Left Content */}
                <div className="hero-content">
                    <span className="hero-tag">👋 Hello, I'm Aditya</span>

                    <h1>
                        I Build <span>Modern Websites</span>
                        <br />
                        That Grow Your Business.
                    </h1>

                    <p>
                        Freelance web developer creating fast, responsive and
                        user-friendly websites that turn ideas into digital experiences.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn-primary">
                            View My Work <span>↗</span>
                        </a>

                        <a href="#contact" className="btn-secondary">
                            Hire Me!
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="hero-visual">
                    <div className="code-card rotate-2 hover:rotate-0 transition-transform duration-300">
                        <div className="code-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="code-body">
                            <p>
                                <span className="purple">const</span>{" "}
                                <span className="blue">developer</span> = {"{"}
                            </p>

                            <p className="indent">
                                <span className="red">name:</span>{" "}
                                <span className="green">'Aditya'</span>,
                            </p>

                            <p className="indent">
                                <span className="red">role:</span>{" "}
                                <span className="green">'Frontend Developer'</span>,
                            </p>

                            <p className="indent">
                                <span className="red">passion:</span>{" "}
                                <span className="green">'Building Websites'</span>
                            </p>

                            <p>{"};"}</p>

                            <p className="comment"> 
                                // Turning ideas into reality 🚀
                            </p>
                        </div>
                    </div>

                    <div className="floating-card card-one">
                        <strong>1.5+</strong>
                        <small>Years Experience</small>
                    </div>

                    <div className="floating-card card-two">
                        <strong>20+</strong>
                        <small>Projects Completed</small>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero1