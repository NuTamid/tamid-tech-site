import Head from 'next/head';
const ContactPage = () => {
  // Assuming techColors is defined somewhere
  const techColors = ['#FC9639', '#FC6161', '#FC397F'].join(',');
  return (
    <>
      <Head>
        <title>Contact Us - TAMID Tech Consulting</title>
      </Head>
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-black px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md z-10"> {/* Increase z-index of form container */}
          <div className="bg-black p-6 rounded-lg shadow-lg sm:p-8">
            <h1 className="mb-4 text-xl font-semibold text-white sm:text-2xl">Contact Us</h1>
            <form className="space-y-6" action="#" method="POST">
              {/* Form fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300">Project Description</label>
                <textarea id="project" name="project" rows={4} className="mt-1 block w-full border border-gray-600 rounded-md bg-gray-700 text-white shadow-sm py-2 px-3 focus:outline-none focus:border-blue-500" required></textarea>
              </div>
              <div>
                <button type="submit" style={{ backgroundColor: techColors.split(',')[0] }} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="z-0 absolute opacity-30 bg-gradient-radial from-orange-400 via-black to-black w-3/4 h-[300px] lg:h-[800px]" style={{ right: '-300px', bottom: '-150px' }} />
      </div>
    </>
  )
}
export default ContactPage;