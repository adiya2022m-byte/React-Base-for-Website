import Navbar1 from '../Components/Navbar1'
import { Link } from 'react-router-dom'
import Footer1 from '../Components/Footer1'

const About = () => {

    const skills = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Bootstrap',
        'Tailwind CSS',
        'GSAP',
        'Responsive Design',
    ]



    return (
        <>
            <Navbar1 />
            <div className="ideal-width firstsecPT">
                <div className="text-center">

                    <h1 className="sectionHeading">
                        About Me
                    </h1>

                    <p className="!mb-12">
                        I'm a frontend developer who enjoys turning ideas into
                        modern, responsive and engaging web experiences.
                    </p>

                </div>


                {/* ================= ABOUT CONTENT ================= */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">

                    {/* Image */}
                    <div className="relative">

                        <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-[#283981]">
                        </div>

                        <img
                            src={import.meta.env.BASE_URL + "images/aboutmeImg.jpg"}
                            alt="About me"
                            className="relative z-10 h-[400px] w-full rounded-3xl object-cover md:h-[500px]"
                        />

                    </div>


                    {/* Content */}
                    <div>

                        <h2 className=" text-3xl font-bold text-gray-900 md:text-4xl">
                            I build websites that are made to make an impact.
                        </h2>

                        <p className="!my-6 text-justify ">
                            I craft digital experiences that turn ideas into
                            meaningful products. From clean, modern interfaces
                            to powerful web solutions, I build responsive,
                            user-focused websites that look great, perform
                            seamlessly and work across every device.
                        </p>

                        <p className="!mt-2 text-justify leading-relaxed text-gray-500">
                            I go beyond writing code by understanding your goals,
                            solving real problems and creating intuitive
                            experiences. My focus is on clean design, smooth
                            interactions, performance and scalability.
                        </p>

                        <p className="!mb-6 text-justify leading-relaxed text-gray-500">
                            Whether you need a business website, landing page or
                            React-based application, I aim to turn your concept
                            into a professional digital experience.
                        </p>

                        <Link
                            to="/project"
                            className="mt-8 inline-block rounded-full bg-[#283981] !px-7 !py-3 font-semibold !text-white transition duration-300 hover:bg-[#1f2d68]"
                        >
                            View My Work →
                        </Link>

                    </div>

                </div>


                {/* ================= SKILLS ================= */}
                <div className="!my-16 max-w-7xl">

                    <div className="text-center">

                        <h2 className="sectionHeading">
                            Technologies I Work With
                        </h2>

                    </div>


                    <div className="!mx-auto mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="group rounded-xl border border-gray-100 bg-gray-50 !px-3 !py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#283981] hover:shadow-lg"
                            >
                                <span className="font-semibold text-gray-700 transition-colors duration-300 group-hover:text-white">
                                    {skill}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>


                {/* ================= STATS ================= */}
                <section className="px-6 py-20">

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">

                        <div className="rounded-2xl bg-white !p-8 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-[#283981]">
                                1.5+
                            </h3>

                            <p className="!mt-2 text-gray-500">
                                Years Experience
                            </p>
                        </div>


                        <div className="rounded-2xl bg-white !p-8 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-[#283981]">
                                25+
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Projects Worked On
                            </p>
                        </div>


                        <div className="rounded-2xl bg-white !p-8 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-[#283981]">
                                100%
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Focus on Quality
                            </p>
                        </div>

                    </div>

                </section>


            </div>
            <Footer1 />
        </>
    )
}

export default About