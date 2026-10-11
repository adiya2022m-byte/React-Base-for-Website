import { Link } from 'react-router-dom'

const Eror404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

            <div className="text-center">

                <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-[#283981]">
                    404
                </h1>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 max-w-lg mx-auto text-gray-500 text-base md:text-lg">
                    Sorry, the page you're looking for doesn't exist or
                    may have been moved to another location.
                </p>

                <Link to="/"
                    className="talk-btn" >
                    ← Back to Home
                </Link>

            </div>

        </section>
  )
}

export default Eror404