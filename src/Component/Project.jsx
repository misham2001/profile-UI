import React, {  } from 'react';


const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

  const projects = [
    {
    //   image: music,
      title: 'Music Player',
      description: 'Music player with all essential features',
      link: '',
    },
    {
    //   image: raining,
      title: 'Weather App',
      description: 'App that shows real-time weather',
      link: '',
    },
    {
      
    //   title: 'Quiz Game',
      description: 'Engaging quiz game with scoring system',
      link: '',
    },
    {
      
      title: 'Quotes App',
      description: 'App that gets quotes and allows tweeting',
      link: '',
    },
    {
      
      title: 'Notes App',
      description: 'A local note-taking app',
      link: '',
    },
    {
      
      title: 'Signup-Signin Form',
      description: 'Attractive UI of Login and Signup page with validation',
      link: '',
    },
  ];

  return (
    <section id="portfolioSection" className="bg-white text-gray-900 py-12 px-8 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade">
        My Portfolio
      </h1>
      <p
        className="text-center text-lg font-medium mb-10 max-w-3xl mx-auto"
        data-aos="fade"
      >
        "I have developed a strong foundation in relevant skills like HTML, CSS, JavaScript,
        React. I am confident in my ability to work independently and contribute meaningfully to
        projects."
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-60 h-60 rounded-md overflow-hidden group"
            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-4 text-white">
              <h2 className="text-lg font-semibold text-center">{project.title}</h2>
              <p className="text-sm text-center">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-yellow-400 text-black font-bold text-center rounded hover:bg-yellow-500"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/misham2001"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-6 bg-white border border-gray-900 font-bold text-gray-900 rounded hover:bg-gray-900 hover:text-white transition duration-300"
          data-aos="fade"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Projects;
