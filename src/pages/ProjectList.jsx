// src/pages/ProjectList.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectList() {
  const { serviceId } = useParams();

  // Simple map of service → projects
  const projects = {
    web: [
      {
        title: "Chef Claude",
        link: "https://scintillating-lebkuchen-824685.netlify.app",
        img: "/image/chef-claude-icon.png",
        alt: "Chef Claude Logo",
      },
      {
        title: "Fullstack Sort API",
        link: "https://fullstack-sort-api.onrender.com",
        img: "/image/sort-api-cover.png",
        alt: "Fullstack Sort API App Screenshot",
      },
      {
        title: "Van Life",
        link: "https://thunderous-daffodil-e1ce57.netlify.app",
        img: "/image/modest-explorer.png",
        alt: "Van Life project screenshot",
      },
      {
        title: "Assembly: Endgame",
        link: "https://darling-souffle-09ab2b.netlify.app",
        img: "/image/guessing-game.jpg",
        alt: "Assembly Endgame Screenshot",
      },
    ],

    software: [
      {
        title: "Automation & Scripting",
        link: "https://github.com/yapisango",
        img: "/image/automation-scripting.jpg",
        alt: "Automation scripting project screenshot",
      },
      {
        title: "Shopping Cart App",
        link: "https://add-t0-cartsangoyapi.netlify.app",
        img: "/image/shopping-cart.avif",
        alt: "Shopping Cart App Screenshot",
      },
      
      {
        title: "Travel Journal",
        link: "https://ubiquitous-dango-fdacdf.netlify.app",
        img: "/image/rectangle-84.png",
        alt: "Travel Journal Screenshot",
      },
    ],

    mobile: [
      {
        title: "React Native Starter",
        link: "https://github.com/yapisango",
        img: "/image/mobile-development.jpg",
        alt: "Mobile app project screenshot",
      },
      {
        title: "Tenzies App",
        link: "https://marvelous-rabanadas-9f1670.netlify.app",
        img: "/image/tenzies.jpg",
        alt: "Tenzies App Screenshot",
      },
    ],

    cloud: [
      {
        title: "Cloud Deployment Project",
        link: "https://github.com/yapisango",
        img: "/image/cloud-deployment.jpg",
        alt: "Cloud deployment screenshot",
      },
      
      {
        title: "Shortest Path Algorithm (BFS)",
        link: "https://github.com/yapisango/shortest-path-algorithm.git",
        img: "/image/shortest-path-bfs.png",
        alt: "Graph shortest path algorithm project screenshot",
      },
    ],
  };

  const serviceProjects = projects[serviceId] || [];

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">
        {serviceId.charAt(0).toUpperCase() + serviceId.slice(1)} Projects
      </h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of our {serviceId} projects
      </p>

      <div className="portfolio">
        {serviceProjects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__item"
            title={proj.title}
          >
            <img src={proj.img} alt={proj.alt} className="portfolio__img" />
          </a>
        ))}
      </div>
    </section>
  );
}



