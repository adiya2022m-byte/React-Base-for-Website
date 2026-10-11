import Navbar1 from "../Components/Navbar1"
import { Link } from "react-router-dom"

import 'swiper/css'
import axios from "axios"
import { useEffect, useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react";
import Tab2 from "../Components/tab2"
import Footer1 from "../Components/Footer1"




const Project = () => {

  const [projects, setProjects] = useState([]);
  const [num, setNum] = useState(1)


  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=6`);

    setProjects(response.data);

  }


  useEffect(() => {

    getData()

  }, [num])




  return (
    <>
      <Navbar1 />
      <div className="firstsecPT">
        <div className="text-center ideal-width">
          <h1 className="sectionHeading">
            Projects
          </h1>
          <p className="!mb-12">
            Here are some of the projects I’ve worked on, showcasing my approach to modern web design and development. From responsive business websites to interactive web applications, each project reflects my focus on clean design, smooth user experiences, and functional solutions built with modern technologies.
          </p>
        </div>


        {/* ================= PROJECTS ================= */}
        <div className="mx-auto max-w-7xl ideal-width">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((element, idx) => {
              return (
                <div className="rounded-2xl bg-[#3956cc3d] relative overflow-hidden hover:-translate-y-1 hover:bg-shadow transition-all duration-300" key={idx}>
                  <div className="absolute rounded bg-white top-2 right-2 !px-[8px] !py-[2px] text-[#283981]  first-letter:uppercase">{idx + 1}</div>
                  <div>
                    <img
                      src={element.download_url}
                      alt={element.author}
                      className="h-60 w-full object-cover" /></div>
                  <div className="!p-2">{element.author}</div>
                </div>
              )
            })}


          </div>

          {/* prev & next buttons  */}
          <div className="projectPageNav">
            <button onClick={() => setNum(1)}>First </button>
            <button onClick={() => setNum(num - 1)}><ChevronLeft /> </button>
            <strong> {num} </strong>
            <button onClick={() => setNum(num + 1)}><ChevronRight /></button>
            <button onClick={() => setNum(20)}>Last </button>
          </div>

        </div>

        <div className="w-full border-t border-[#1f2a5c] !my-12"></div>

        {/* {================== Tabs ===========} */}
        <div className="mx-auto max-w-7xl !my-12 text-center ideal-width" style={{ minHeight: '76vh' }}>
          <h3 className="sectionHeading !mb-14">Running Projects</h3>
          <Tab2 />
          
        </div>

      </div>
      <Footer1 /> 
    </>
  )
}

export default Project

