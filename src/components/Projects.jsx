import React from 'react';
import { projectsData } from '../lib/data.jsx';
import Project from './Project.jsx';

export default function Projects(props) {

  return (
    <section id="projects" className="projects" >
    <h2> { props.title } </h2>
      <div className="project-listing">
        {projectsData.map((project, index) => (
          <div key={index} className="project-small">
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}