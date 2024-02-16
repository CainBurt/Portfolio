import React from 'react';
import Project from './Project.jsx';

export default function Projects(props) {

  return (
    <section id="projects" className="projects" >
    <h2> { props.title } </h2>
      <div className="project-listing">
        {props.data.map((project, index) => (
            <Project key={ index } {...project} />
        ))}
      </div>
    </section>
  );
}