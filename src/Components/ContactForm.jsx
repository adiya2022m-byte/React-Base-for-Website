import { Send } from 'lucide-react'
import { useState } from 'react'


const ContactForm = () => {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const formData = (event) => {
        event.preventDefault()
        console.log('Form submitted:', fname, email, subject, message);

        // Reset form fields after submission
        setFname('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <form className="space-y-6"
            onSubmit={formData}
        >

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="Form-group">
                    <label htmlFor="name" >
                        Your Name
                    </label>

                    <input
                        onChange={(element) => {
                            setFname(element.target.value);
                        }}
                        value={fname}
                        id="name" type="text" placeholder="John Doe" required
                    />
                </div>


                <div className="Form-group">
                    <label htmlFor="email" >
                        Email Address
                    </label>

                    <input
                        onChange={(element) => {
                            setEmail(element.target.value);
                        }}
                        value={email}
                        id="email" type="email" placeholder="john@example.com" required
                    />
                </div>

            </div>


            {/* SUBJECT */}
            <div className="Form-group">
                <label htmlFor="subject" >
                    Subject
                </label>

                <input
                    onChange={(element) => {
                        setSubject(element.target.value);
                    }}
                    value={subject}
                    id="subject"
                    type="text"
                    placeholder="I need a website"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#283981] focus:ring-2 focus:ring-[#283981]/10 transition"
                />
            </div>


            {/* MESSAGE */}
            <div className="Form-group">
                <label htmlFor="message" >
                    Message
                </label>

                <textarea
                    onChange={(element) => {
                        setMessage(element.target.value);
                    }}
                    value={message}
                    id="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                ></textarea>
            </div>


            {/* SUBMIT */}
            <button
                type="submit"
                className="Submit-btn"
            >
                Send Message
                <Send size={18} />
            </button>

        </form>
    )
}

export default ContactForm