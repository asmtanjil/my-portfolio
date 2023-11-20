import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {


  const projects = [
    {
      id: 1,
      name: "Adventure Bikers",
      type: 'A Bike ReSale Website',
      img: "https://i.ibb.co/3fNCJSY/ss1.png",
      liveSite: 'https://adventure-biker.web.app/',
      gitHubClient: 'https://github.com/asmtanjil/adventure-bikers-client',
      gitServer: 'https://github.com/asmtanjil/adventure-bikers-server'

    },
    {
      id: 2,
      name: "Travel With Tanjil",
      type: 'A Travel Service-Related Website',
      img: "https://i.ibb.co/2d0sqng/ss4.png",
      liveSite: 'https://altitute-trekker.web.app/',
      gitHubClient: 'https://github.com/asmtanjil/travel-with-tanjil-client',
      gitServer: 'https://github.com/asmtanjil/travel-with-tanjil-server'

    },
    {
      id: 3,
      name: "Explore Tech",
      type: 'A E-learning Website',
      img: "https://i.ibb.co/wJZxJQk/ss9.png",
      liveSite: 'https://explore-tech-eaa6f.web.app/',
      gitHubClient: 'https://github.com/asmtanjil/explore-tech-client',
      gitServer: 'https://github.com/asmtanjil/explore-tech-server'

    }
  ]

  return (
    <div className='p-8 md:p-12' id="projects">
      <div id='projects'>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-12'>Projects</h1>
        <h2 className='text-lg md:text-xl text-center my-8 md:my-12'>You can visit my MERN-Stack Projects here</h2>
        <div className='grid lg:grid-cols-3 gap-12'>
          {
            projects && projects.map(project =>
              <div key={project.id} className="card text-black bg-teal-50 border-1 shadow-xl">
                <figure className='p-5'>
                  <img src={project.img} className="hover:animate-pulse rounded border border-gray-200" alt="car!" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p>{project.type}</p>

                  <div className="flex justify-between ">
                    <a className='btn btn-accent btn-xs rounded-full' target="blank" href={project.liveSite}>LIVE SITE</a>
                    <a className='btn btn-accent btn-xs rounded-full' href={project.gitHubClient} target="blank">CLIENT</a>
                    <a className='btn btn-accent btn-xs rounded-full' href={project.gitServer} target="blank">SERVER</a>
                  </div>
                  <Link to={`/projectDetails/${project.id}`} className="my-4">
                    <button className='btn btn-md btn-secondary rounded-full w-full'>View Details</button>
                  </Link>
                </div>

              </div>)
          }
        </div>
      </div>

    </div >
  );
};

export default Projects;