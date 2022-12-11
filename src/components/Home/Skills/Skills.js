import React from 'react';

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
    <div id='skill' className='my-20 w-11/12 mx-8 animate__fadeInRight animate__animated animate__slower	3s'>
      <h1 className='text-center text-4xl font-bold my-10 uppercase'>Skills</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          skills.map(skill => <div key={skill.id}>


            <div className='flex flex-col justify-center items-center gap-8'>
              <p>{skill.name}</p>
              <div className="radial-progress text-primary"
                style={{ "--value": 70 }}>{skill.value}%
              </div>
            </div>

            {/* <p>{skill.value}%</p> */}
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Skills;