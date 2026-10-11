import ContactForm from '../Components/ContactForm';
import Footer1 from '../Components/Footer1';
import Navbar1 from '../Components/Navbar1' 


import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar1 />
      <main className="ideal-width firstsecPT pb-16">

        {/* ================= HERO ================= */}
        <section className="text-center mb-16">

          <h1 className="sectionHeading">
            Let's Work Together
          </h1>

          <p className="!mb-12">
            Have a project in mind or need help building your website?
            I'd love to hear about it. Send me a message and let's
            create something great together.
          </p>
        </section>


        {/* ================= CONTACT SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="aboutgrids1 md:!p-10 !p-8 border border-[#283981]/30">

            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Let's turn your idea into reality.
            </h2>

            <p className="!text-black/90 !my-8 leading-7 mb-10">
              Whether you need a business website, React application,
              responsive design or a complete digital solution,
              feel free to get in touch.
            </p>


            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@devadee.com"
                className="flex items-center gap-4 mb-7 group"
              >
                <div className="form-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Email
                  </p>

                  <p className="font-medium group-hover:underline">
                    hello@devadee.com
                  </p>
                </div>
              </a>


              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 mb-7 group"
              >
                <div className="form-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Phone
                  </p>

                  <p className="font-medium group-hover:underline">
                    +91 99999 99999
                  </p>
                </div>
              </a>


              <div className="flex items-center gap-4">
                <div className="form-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Location
                  </p>

                  <p className="font-medium">
                    Lucknow, India
                  </p>
                </div>
              </div>
            </div>



            {/* BOTTOM CTA */}
            <div className="!mt-12 !pt-4 border-t border-[#283981]/30 flex items-center justify-between">
              <p className="text-sm text-white/70">
                Available for freelance projects
              </p>

              <ArrowUpRight size={20} />
            </div>

          </div>


          {/* RIGHT SIDE - FORM */}
          <div className="contactform md:!p-10 !p-8 rounded-3xl border border-gray-200 shadow-sm">

            <h2 className="text-3xl md:text-4xl font-semibold mb-5">
              Send Me a Message
            </h2>

            <p className="!text-black/90 !my-8 leading-7 mb-10">
              Fill out the form below and I'll get back to you
              as soon as possible.
            </p>
            <ContactForm />


          </div>

        </section>

      </main>
      <Footer1 />   
    </>
  )
}

export default Contact




