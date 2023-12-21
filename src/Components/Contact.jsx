import React from 'react'

const Contact = () => {
  return (
    <div>
<div className="header p-[1rem] mx-10">
<div className="left flex flex-col justify-center "><h1 className='text-[4rem] font-bold'>CONTACT US</h1>
<p className='mr-[10rem]'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT,  OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL,  OR SOCIAL MEDIA. </p>
{/* start */}
<div className="bg-gray-100 font-sans">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 text-sm mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </form>
          </div>

          {/* Right Column */}
          <div className="bg-white p-8 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
{/* end */}

</div>
<div className="right">
<img src="/assets/24.png." alt="" />

</div>
</div>


    </div>
  )
}

export default Contact