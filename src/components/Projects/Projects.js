import React from 'react';

const Projects = () => {


  const projects = [
    {
      id: 1,
      name: "Adventure Bikers",
      type: 'A Bike ReSale Website',
      img: "https://i.ibb.co/qB6pYs0/Screenshot-160.png",
      liveSite: 'https://adventure-biker.web.app/',
      gitClient: 'https://github.com/asmtanjil/adventure-bikers-client',
      gitServer: 'https://github.com/asmtanjil/adventure-bikers-server'

    },
    {
      id: 2,
      name: "Travel With Tanjil",
      type: 'A Travel Service-Related Website',
      img: "https://i.ibb.co/tphS5H9/Screenshot-157.png",
      liveSite: 'https://altitute-trekker.web.app/',
      gitClient: 'https://github.com/asmtanjil/travel-with-tanjil-client',
      gitServer: 'https://github.com/asmtanjil/travel-with-tanjil-server'

    },
    {
      id: 3,
      name: "Explore Tech",
      type: 'A E-learning Website',
      img: "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
      liveSite: 'https://explore-tech-eaa6f.web.app/',
      gitClient: 'https://github.com/asmtanjil/explore-tech-client',
      gitServer: 'https://github.com/asmtanjil/explore-tech-server'

    }
  ]

  return (
    <div className='' id="projects">
      <div id='projects' className='my-20'>
        <h1 className='text-center text-4xl font-bold my-10 uppercase'>Projects</h1>
        <h2 className='text-3xl text-center my-4'>You can visit my MERN-Stack Projects here</h2>
        <div className='grid lg:grid-cols-3  gap-12 '>
          {
            projects && projects.map(project => <div key={project.id} className="card border-1 bg-slate-900 shadow-xl">
              <figure><img src={project.img} className="p-8 rounded" alt="car!" /></figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.type}</p>

                <div className="flex justify-between ">
                  <a className='btn btn-ghost' target="blank" href={project.liveSite}>LIVE</a>
                  <a className='btn btn-ghost' href={project.gitClient} target="blank">CLIENT</a>
                  <a className='btn btn-ghost' href={project.gitServer} target="blank">SERVER</a>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>

    </div>
  );
};

export default Projects;