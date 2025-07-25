import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative w-full py-16 bg-gradient-to-br from-[#e0e7ff] via-[#c7d2fe] to-[#dbeafe] overflow-hidden shadow-inner">
      {/* Decorative Light Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#a5b4fc]/20 via-transparent to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center mx-4 md:mx-20 lg:mx-56 gap-9">
        <h1 className="font-extrabold text-[40px] sm:text-[50px] text-center mt-10 leading-tight text-gray-800 drop-shadow-md">
          <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-transparent bg-clip-text">
            Discover Your Next Adventure with AI:
          </span><br />
          <span className="text-gray-900">
            Personalized Itineraries at Your Fingertips
          </span>
        </h1>

        <p className="text-xl text-gray-700 text-center max-w-3xl">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>

        <Link to="/create-trip">
          <Button className="px-6 py-3 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold text-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-300">
            Get Started, It's Free
          </Button>
        </Link>

        <img
          src="/landing.png"
          alt="Hero Illustration"
          className="w-full max-w-[750px] rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-indigo-200"
        />
      </div>
<Link to="/create-trip">
<p className="text-center text-gray-600 mt-8">
  Ready to plan your next trip? <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Explore now ↓</span>
</p>

</Link>
    </div>

  )
}

export default Hero
