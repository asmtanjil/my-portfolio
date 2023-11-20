import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

const skills = [

  {
    id: 1,
    name: "HTML",
    value: "90"
  },
  {
    id: 2,
    name: "CSS",
    value: "80"
  },
  {
    id: 3,
    name: "JavaScript",
    value: "70"
  },
  {
    id: 4,
    name: "React JS",
    value: "70"
  },
  {
    id: 5,
    name: "Express JS",
    value: "60"
  },
  {
    id: 6,
    name: "MongoDB",
    value: "60"
  },
  {
    id: 7,
    name: "Node JS",
    value: "50"
  },
]

const Skills = () => {
  return (
    <div id='skill' className='p-8 md:p-12'>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-12'>My Skills</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          skills.map(skill => <div key={skill.id}>


            <div className='flex flex-col justify-center items-center gap-8'>
              <p>{skill.name}</p>
              <ProgressBar width="180" trackWidth="13" percentage={skill.value} />
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Skills;