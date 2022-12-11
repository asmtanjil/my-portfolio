import React from 'react';
import { useParams } from 'react-router';

const projects = [
  {
    "id": 1,
    "name": "ADVENTURE-BIKERS",
    "type": "A Bike ReSale Website",
    "imgs": [
      "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
      "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
      "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
    ],
    "liveSite": "https://adventure-biker.web.app/",
    "gitHubClient": "https://github.com/asmtanjil/adventure-bikers-client",
    "gitHubServer": "https://github.com/asmtanjil/adventure-bikers-server",
    "feature": [
      "Second-hand bike resale website to buy and sell a used car",
      "On this website, a user can register as a buyer or seller role.",
      "As a buyer can order bikes by clicking the book now button",
      " The seller can add a bike.",
      "A seller can advertise his product by clicking advertise button on Dashboard's my product page. Advertise product will be displayed on the Home page.",
      "Also, a seller can delete his product.",
      "Admin can manage all buyers, all sellers, and the reported product page.",
      "Also, the admin can verify a seller"
    ]
  },
  {
    "id": 2,
    "name": "TRAVEL WITH TANJIL",
    "type": "A Travel Service-Related",
    "imgs": [
      "https://i.ibb.co/tphS5H9/Screenshot-157.png",
      "https://i.ibb.co/tphS5H9/Screenshot-157.png",
      "https://i.ibb.co/tphS5H9/Screenshot-157.png",
    ],
    "liveSite": "https://altitute-trekker.web.app/",
    "gitHubClient": "https://github.com/asmtanjil/travel-with-tanjil-client",
    "gitHubServer": "https://github.com/asmtanjil/travel-with-tanjil-server",
    "feature": [
      "It is a website of a Travel-Service.",
      "In home section I load 3 services , the api was limit by server side.",
      "There is a Load more button which is redirect to the services route.",
      "In service detail page details of that service and review on that service displayed",
      "User can comment on the service",
      "In my reviews pages displayed all review by a logged in user. It is private route."
    ]
  },
  {
    "id": 3,
    "name": "EXPLORE TECH",
    "type": "A E-learning Website",
    "imgs": [
      "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
      "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
      "https://i.ibb.co/j3BQWyr/Screenshot-161.png",
    ],
    "liveSite": "https://explore-tech-eaa6f.web.app/",
    "gitHubClient": "https://github.com/asmtanjil/explore-tech-client",
    "gitHubServer": "https://github.com/asmtanjil/explore-tech-server",
    "feature": [
      "It is a single page application",
      "Courses are filtered by category",
      "One can find the courses by category, click on category on the left side in courses route",
      "There is a download feature"
    ]
  }
]


const ProjectDetails = () => {


  const { id } = useParams();

  const project = projects?.find(p => p.id.toString() === id)

  const { name, gitHubClient, gitHubServer, liveSite, feature, imgs } = project;

  return (
    <div>
      <div className='w-11/12 mx-auto mb-10'>

        <h3 className='text-2xl font-semibold text-center my-5'>{name}</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            imgs?.map((img, i) => <img className='h-56 w-full hover:animate-pulse' key={i} src={img} alt="" />)
          }
        </div>
        <div className='flex flex-col md:flex-row justify-between my-20'>
          <a target="blank" className='btn btn-outline my-2' href={liveSite}>Live Website </a>
          <a target="blank" className='btn btn-outline my-2' href={gitHubClient}>Client Side Link </a>
          <a target="blank" className='btn btn-outline my-2' href={gitHubServer}>Server Side Link</a>
        </div>
        <p>Features:</p>
        <ul className='px-20 my-5' style={{ listStyle: 'disc' }}>
          {
            feature?.map((f, i) =>
              <li key={i}>{f}</li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;