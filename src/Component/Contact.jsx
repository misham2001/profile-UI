import React, {  } from 'react';
import { FaPhoneAlt, FaInstagramSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';


const Contact = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert('Form submitted successfully');
    }
  };

  return (
    <div
      id="contactSection"
      className="min-h-screen p-16 bg-gray-100 flex flex-col items-center shadow-inner"
    >
      <h1
        className="text-3xl font-light tracking-wider mb-12"
        data-aos="fade"
      >
        Contact me
      </h1>

      <div
        className="flex flex-col lg:flex-row w-full lg:w-3/4 bg-white shadow-md"
        data-aos="fade-up"
      >
        {/* Info Section */}
        <div className="lg:w-1/3 p-6 bg-white">
          <h3 className="text-lg mb-4">Contact Information</h3>
          <p className="text-sm mb-8">For creating attractive websites and user interface components.</p>

          <div className="flex items-center mb-6">
            <FaPhoneAlt className="mr-4 text-lg text-gray-600" />
            <p className="text-sm">8681083555</p>
          </div>

          <div className="flex items-center mb-6">
            <IoMdMail className="mr-4 text-lg text-gray-600" />
            <p className="text-sm">misham.d24@gmail.com</p>
          </div>

          <div className="flex items-center mb-6">
            <FaLocationDot className="mr-4 text-lg text-gray-600" />
            <p className="text-sm">Chennai, Tamil Nadu, India</p>
          </div>

          <div className="flex justify-around mt-8">
            <a
              href="https://github.com/misham2001"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-700 hover:text-gray-900 transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/misham-d-614006261/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-blue-700 hover:text-blue-900 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/misham498/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-pink-600 hover:text-pink-800 transition"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-2/3 bg-teal-600 p-8 text-white">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col w-full">
                <input
                  name="from_name"
                  type="text"
                  required
                  className="bg-transparent border-b border-white focus:outline-none focus:border-teal-200 transition text-white placeholder-white py-2"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  name="from_email"
                  type="email"
                  required
                  className="bg-transparent border-b border-white focus:outline-none focus:border-teal-200 transition text-white placeholder-white py-2"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <input
                name="Phone_number"
                type="number"
                required
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-teal-200 transition text-white placeholder-white py-2"
                placeholder="Phone No"
              />
            </div>

            <div>
              <input
                name="subject_main"
                type="text"
                required
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-teal-200 transition text-white placeholder-white py-2"
                placeholder="Subject"
              />
            </div>

            <div>
              <textarea
                name="message"
                required
                className="w-full bg-transparent border-b border-white focus:outline-none focus:border-teal-200 transition text-white placeholder-white py-2 resize-none"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-800 hover:bg-teal-900 text-white font-semibold px-6 py-2 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
