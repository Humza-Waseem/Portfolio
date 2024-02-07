

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/gifd.gif";

const imageAltText = "coding gif";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  
  {
    title: "StudySphere: Collaborative Learning Platform",
    description:
      "StudySphere is a Django-based web application designed to facilitate collaborative studying. Users can create virtual study rooms and invite others to join, fostering a shared learning experience. Each room acts as a dedicated space for users to collaborate, discuss topics, and share resources.",
    url: "https://github.com/Humza-Waseem/Django",
  },
  {
    title: "Desktop Application using .Net Framework 🎉",
    description:
      "A complete Desktop Application Made with C# through .NET framework, incorporating OOP concepts",
    url: "https://github.com/Humza-Waseem/Car-Rent-System-GUI-Csharp",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and Skills.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "E-Commerce Website",
    description:
      "An E-Commerce Website that shows my Front End Web Developement Skills. CSS, HTMl were used in the making of this web app",
    url: "https://github.com/Humza-Waseem/E-Commerce_Website/tree/master",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
