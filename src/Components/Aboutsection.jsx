import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)


const Aboutsection = () => {

    useEffect(() => {
        gsap.from(".aboutimg", {
            y: -250,
            x: 250,
            opacity: 0,
            duration: 1,
            ease: "power3.in",

            scrollTrigger: {
                trigger: ".aboutimg",
                start: "top 80%",
            }
        });
    }, [])


    return (

        <div className="ideal-width text-center !py-[50px]">

            <h2 className='sectionHeading' >About Us</h2>
            <div className='aobutcontent'>
                <div className='aboutgrids1'>
                    <h3>"Who I am" </h3>
                    <div style={{ paddingTop: '20px', marginBottom: '20px', textAlign: 'justify', textShadow: '0 0 .5px #000000' }}>
                        <p style={{ color: '#000', letterSpacing: '.12px' }} >
                            I craft digital experiences that turn ideas into meaningful products. From clean, modern interfaces to powerful web solutions, I build responsive, user-focused websites that look great, perform seamlessly, and work across every device. <br /> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I go beyond writing code by understanding your goals, solving real problems, and creating intuitive experiences. With a focus on clean design, smooth interactions, performance, and scalability, I turn concepts into digital solutions that help businesses stand out and grow.
                        </p>

                    </div>
                </div>
                <div className='aboutgrids2' style={{ padding: '0', height: 'fit-content' }}>
                    <img className='aboutimg' src= {import.meta.env.BASE_URL + "images/aboutmeImg.jpg"} alt="About Me" />
                    <div style={{ padding: '20px', marginBottom: '20px', textAlign: 'justify' }}>
                        <h3>Skill Tech Stack</h3>
                        <div className="skill-grid" >
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>Tailwind</span>
                            <span>JavaScript</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
                <div className='aboutgrids3'>
                    <div className='aboutgrids2'>
                        <h3>Client Satisfaction</h3>
                        <p style={{ fontSize: '3rem', fontStyle: 'italic' }}>100%</p>
                    </div>
                    <div className='aboutgrids2'>
                        <h3>On-Time Delivery</h3>
                        <p style={{ fontSize: '3rem', fontStyle: 'italic' }}>95%</p>
                    </div>
                    <div className='aboutgrids2'>
                        <h3>Active Projects</h3>
                        <p style={{ fontSize: '3rem', fontStyle: 'italic' }}>25+</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Aboutsection