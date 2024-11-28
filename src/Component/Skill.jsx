import React, {  } from 'react';

const Skills = () => {
  const skillArr = [
    {
      name: 'HTML',
      description:
        'Proficient in crafting robust HTML structures and designing visually appealing layouts, ensuring accessibility and cross-browser compatibility.',
     
    },
    {
      name: 'CSS',
      description:
        'Skilled in creating responsive, visually stunning user interfaces using CSS, incorporating animations, transitions, and media queries for a dynamic user experience.',
     
    },
    {
      name: 'JavaScript',
      description:
        'Possess a strong foundation in JavaScript, with proficiency in DOM manipulation, event handling, and modern JavaScript concepts.',
     
    },
    {
      name: 'React',
      description:
        'Currently developing React skills, with a solid understanding of components, state management, and hooks. Actively working on React projects to deepen my proficiency in React.',
     
    },
    {
      name: 'GitHub',
      description:
        'Efficiently collaborate on projects using GitHub, proficient in creating repositories, managing branches. Experienced in version control best practices.',
    },
  ];

//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

  const handleAnimationState = (index) => {
    return index % 2 === 0 ? 'fade-left' : 'fade-right';
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-32 flex flex-col items-center shadow-inner">
      <h1
        className="text-4xl font-light tracking-wider mb-8"
        data-aos="fade"
      >
        My Skills
      </h1>
      <div
        className="text-lg font-semibold w-3/5 mb-8 text-center"
        data-aos="fade-up"
      >
        "I'm a skilled web developer proficient in HTML, CSS, JavaScript, and React. My experience in building projects demonstrates my ability to contribute effectively to teams."
      </div>
      <div className="w-3/5 rounded-xl">
        {skillArr.map((skill, index) => (
          <div
            data-aos={handleAnimationState(index)}
            key={index}
            className="bg-blue-50 my-6 p-4 flex items-center justify-between rounded-xl shadow-md"
          >
            <div className="flex items-center">
              <img
                src={skill.img}
                alt={`${skill.name} icon`}
                className="h-12 pr-4"
              />
            </div>
            <div className="w-4/5">
              <h2 className="text-xl mb-2">{skill.name}</h2>
              <p className="text-sm">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
