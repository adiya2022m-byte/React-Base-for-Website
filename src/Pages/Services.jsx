import Footer1 from "../Components/Footer1"
import Navbar1 from "../Components/Navbar1"
import { Link } from 'react-router-dom'   



const Services = () => {

    const allServices = [
        {
            number: '01',
            title: 'Website Development',
            description:
                'Modern, responsive and high-performance websites built to give your business a strong online presence.',
            icon: '💻',
        },
        {
            number: '02',
            title: 'React Development',
            description:
                'Interactive and scalable React applications with reusable components and smooth user experiences.',
            icon: '⚛️',
        },
        {
            number: '03',
            title: 'Responsive Design',
            description:
                'Websites that look and work perfectly across desktops, tablets and mobile devices.',
            icon: '📱',
        },
        {
            number: '04',
            title: 'UI Implementation',
            description:
                'Pixel-perfect conversion of your designs into clean, functional and responsive web interfaces.',
            icon: '🎨',
        },
        {
            number: '05',
            title: 'Website Optimization',
            description:
                'Improve website performance, responsiveness and user experience for a faster web experience.',
            icon: '⚡',
        },
        {
            number: '06',
            title: 'Website Maintenance',
            description:
                'Regular updates, bug fixes, content changes and improvements to keep your website running smoothly.',
            icon: '🛠️',
        },
    ]



    return (
        <>
            <Navbar1 />
            <div className="ideal-width firstsecPT">
                <div className="text-center">

                    <h1 className="sectionHeading">
                        My Services
                    </h1>

                    <p className="!mb-8">
                        I create modern, responsive and user-friendly digital
                        experiences that help businesses build a strong online presence.
                    </p>

                </div>


                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {allServices.map((service) => (
                        <div
                            key={service.number}
                            className="group bg-white !p-8 rounded-2xl
                                hover:-translate-y-2 hover:shadow-xl
                                transition-all duration-300" >

                            <div className="flex items-center justify-between !mb-4">

                                <span className="text-2xl">
                                    {service.icon}
                                </span>

                                <span className="font-semibold text-gray-300">
                                    {service.number}
                                </span>

                            </div>

                            <h2 className="mt-8 text-2xl font-bold text-gray-800
                                group-hover:text-[#283981] transition-colors duration-300">
                                {service.title}
                            </h2>

                            <p className="mt-4 text-gray-500 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="!mt-4 h-[2px] w-10 bg-[#283981]
                                group-hover:w-full transition-all duration-500">
                            </div>
                        </div>
                    ))}

                </div>


            </div>
            <Footer1 />
        </>
    )
}

export default Services