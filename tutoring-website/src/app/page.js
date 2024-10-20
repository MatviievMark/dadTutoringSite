'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import maxPicture from './max-picture.png'


export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error('Form submission failed');
        // Optionally, handle the error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('There was an error submitting the form', error);
      // Optionally, handle the error (e.g., show an error message to the user)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-poppins font-bold text-xl sm:text-2xl text-gray-100 hover:text-[#f2c811] transition-colors duration-300">Max's Tutoring</div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-[#f2c811] transition-colors duration-300">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <div className={`md:flex md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-gray-800 p-4' : 'hidden'}`}>
            {['About', 'Tutoring Process', 'Pricing', 'Contact'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-gray-300 hover:text-[#f2c811] transition-colors duration-300 text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-1 bg-[#f2c811] mt-4 md:hidden"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-gray-100 mb-4">I'm Max</h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-300">
              Certified Math 6-12 teacher with a Master's in Finance and Banking. 
              I've been tutoring for 7 years, helping students master math and ace the SAT/ACT.
            </p>
            <a href="#contact" className="inline-block bg-[#f2c811] text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-[#e0b800] transition-colors duration-300">
              Get Started
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src={maxPicture} alt="Max" width={300} height={300} className="border-4 border-[#f2c811] rounded-full" />
          </div>
        </div>
      </section>

      {/* Tutoring Process */}
      <section id="tutoring-process" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl font-bold text-gray-100 mb-8">Tutoring Process</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              {[
                { number: 1, title: 'Practice Test' },
                { number: 2, title: 'Learning Math' },
                { number: 3, title: 'Learning Mindset' }
              ].map((step) => (
                <div
                  key={step.number}
                  className={`bg-gray-700 rounded-lg shadow-md p-4 mb-4 cursor-pointer transition-colors duration-300 ${activeStep === step.number ? 'bg-gray-600 border-2 border-[#f2c811]' : ''}`}
                  onClick={() => setActiveStep(step.number)}
                >
                  <h3 className="font-poppins text-lg font-semibold text-[#f2c811] mb-2">Step {step.number}</h3>
                  <p className="font-medium text-gray-200">{step.title}</p>
                </div>
              ))}
            </div>
            <div className="w-full md:w-2/3">
              <div className="bg-gray-700 rounded-lg shadow-md p-4 transition-all duration-500 ease-in-out overflow-hidden">
                <h3 className="font-poppins text-xl font-semibold text-gray-100 mb-4">
                  {activeStep === 1 && 'Practice Test'}
                  {activeStep === 2 && 'Learning Math'}
                  {activeStep === 3 && 'Learning Mindset'}
                </h3>
                <div className="text-gray-300 whitespace-pre-wrap transition-all duration-500 ease-in-out">
                  {activeStep === 1 && (
                    <>
                      <p className="mb-4">Each learning cycle starts and ends with a practice test. The best way to prepare for the actual test is to take practice tests regularly. The more tests students take, the more familiar, confident, and less intimidated they become when it comes to the real exam.</p>
                      <p>I encourage students to take 3-6 official Bluebook SAT practice tests from the CollegeBoard website. This helps them identify their strengths, weaknesses, and recognize the common patterns, syntax, and structure of the test.</p>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <p className="mb-4">Based on the results of the practice test, we have a clear picture of the specific skills the student needs to master in the four main areas: Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry.</p>
                      <p>We then concentrate on the topics they need to learn by deeply understanding the core concepts and the mathematics behind them. The focus is on practice, practice, practice to build a solid foundation.</p>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <p className="mb-4">In addition to the content, I also teach students various key strategies and test-taking techniques, such as:</p>
                      <p className='mb-4'>1. Focusing on understanding the concepts rather than just memorizing formulas. This allows them to approach problems in the most efficient manner.</p>
                      <p className='mb-4'>2. Talking through the problem-solving process out loud. By answering questions about their thinking, students develop a deeper understanding of the material.</p>
                      <p className='mb-4'>3. Utilizing the built-in DESMOS graphing calculator on the digital SAT. This can save them up to 30% of the time on the test.</p>
                      <p className=''>Throughout the process, I tailor my teaching methods to each student's learning style, ensuring they stay engaged and motivated to achieve their goals.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins text-3xl font-bold text-gray-100 mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "1-on-1 Tutoring Online",
                price: "$40/hour", 
                details: [
                  "Via Zoom or Google Meet",
                  "*minimum 1 hour per session"
                ]
              },
              {
                title: "1-on-1 Tutoring In-Person",
                price: "From $40/hour",
                details: [
                  "At tutor's location: $40/hour",
                  "At student's location: $50/hour",
                  "*minimum 2 hours per session"
                ]
              },
              {
                title: "1-on-1 Tutoring 10-Hour Course",
                price: "$350 per course",
                details: [
                  "10 hours of tutoring",
                  "Flexible schedule",
                  "Online or in-person"
                ]
              },
              {
                title: "Small Group Sessions",
                price: "TBD",
                details: [
                  "2-4 students", 
                  "Customized plan",
                  "Online or in-person"
                ]
              }
            ].map((option) => (
              <div key={option.title} className="border-2 border-gray-700 rounded-lg p-6 bg-gray-800 hover:border-[#f2c811] transition-colors duration-300">
                <h3 className="font-poppins text-xl font-semibold text-gray-100 mb-2">{option.title}</h3>
                <p className="text-2xl font-bold text-[#f2c811] mb-6">{option.price}</p>
                {option.details && (
                  <ul className="text-gray-300 text-sm mt-4">
                    {option.details.map((detail, index) => (
                      <li key={index} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 min-h-[500px]">
          <h2 className="font-poppins text-3xl font-bold text-gray-100 mb-8">Contact Me</h2>
          <div className="flex flex-col items-center justify-center">
            {isSubmitted ? (
              <div className="max-w-lg mx-auto text-center">
                <h3 className="text-2xl font-bold text-[#f2c811] mb-4">Thank you for your submission!</h3>
                <p className="text-gray-300">I'll get back to you as soon as possible.</p>
              </div>
            ) : isSubmitting ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#f2c811]"></div>
              </div>
            ) : (
              <form 
                className="max-w-lg w-full" 
                action="https://formspree.io/f/xkgngwzj" 
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c811]" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c811]" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f2c811]" required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#f2c811] text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-[#e0b800] transition-colors duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}