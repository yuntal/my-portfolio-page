// RightContent.js
import React from 'react';


const RightContent = ({ activeLink }) => {
  const rightContentStyle = {
    padding: '20px',
    color: 'white',
  };

  const projects = [
    {
      id: 1,
      image: '/my-portfolio-page/images/vær.png',
      header: 'Weather-App',
      description: 'A weather forecast app that allows users to search for and add favorite locations, offering an intuitive design for a personalized experience. I have also included a dark-mode feature for color blindness, increased customization options, and user comfort.',
      technologies: ['React', 'SCSS',  'JS'],
      externalLink: 'https://yuntal.github.io/weather-app', 
    },
    {
      id: 2,
      image: '/my-portfolio-page/images/landing.png',
      header: 'landing page',
      description: 'A website template with a pre-designed set of layout, structure, and graphic elements. This serves as a starting point for the development of a website, providing a basic framework that can be customized according to the users needs.',      
      technologies: [ 'React', 'SCSS', 'JS'],
      externalLink: 'https://yuntal.github.io/landing-page/',
    },
    {
      id: 3,
      image: '/my-portfolio-page/images/supreme.png',
      header: 'Supreme store',
      description: 'The project demonstrates the functionality of CRUD (Create, Read, Update, Delete) for products. The platform allows users to interact with products by adding, removing, and adjusting quantities. It is important to emphasize that this is a limited demonstration focusing specifically on managing products through basic CRUD operations.',      
      technologies: ['React', 'SCSS', 'JS'],
      externalLink: 'https://github.com/yuntal/supreme-store',
    },
    {
      id: 4,
      image: '/my-portfolio-page/images/flower.png',
      header: 'Flower-Power',
      description: 'A WordPress website developed locally. Fine-tuned with layout and features through the CMS. Simultaneously, API integration was performed to connect the website to external services. The result is a website that combines local development, customizations through the CMS, and seamless integration of various services through API.',      
      technologies: ['CMS', 'WP', 'mySQL', 'JS'],
      externalLink: 'https://designbytalay.com/',
    }
  ];

  const aboutContent = (
    <div id="my-profile">
      <h1 className="my-profile">Profile</h1>
      <p className="profile">Gender: Male</p>
      <p className="profile2">Age: 30</p>
      <p className="profile2">Currently located in: Stavanger, Norway.</p>
      <p className="profile2">Passion: Design & development</p>
      <hr className="hr" style={{ backgroundColor: '#f4c587' }}></hr>
      <p className="about-me">
        I'm a frontend developer who's all about creating practical and responsive layouts. Passionate about turning design
        ideas into seamless user interfaces, I bring a mix of creativity and technical know-how to the table. With a
        solid foundation in HTML, CSS, and JavaScript, I love the challenge of making designs come to life across
        different devices. I'm always up for learning and thrive in collaborative environments where innovation and
        creativity are key. Let's build the digital experiences of the future together!
      </p>
    </div>
  );


  const academicExperienceContent = (
    <div>
      <h1 className="academic-experience">Skillset</h1>
      <div className="skill-pills">
        <span className="skill-pill">HTML</span>
        <span className="skill-pill">CSS</span>
        <span className="skill-pill">JavaScript</span>
        <span className="skill-pill">React</span>
        <span className="skill-pill">Project development</span>
        <span className="skill-pill">Headless CMS</span>
        <span className="skill-pill">Rest API</span>
        <span className="skill-pill">WordPress</span>
        <span className="skill-pill">CMS</span>
        <span className="skill-pill">SQL</span>
        <span className="skill-pill">Git</span>
        <span className="skill-pill">JSON</span>
        <span className="skill-pill">Frontend development</span>
        <span className="skill-pill">UX design</span>
        <span className="skill-pill">UI</span>
        <span className="skill-pill">Project Methodology</span>
        <span className="skill-pill">Problem Solving</span>
        <span className="skill-pill">Adobe XD</span>
        <span className="skill-pill">Sass</span>
        <span className="skill-pill">Responsive UI design</span>
        <span className="skill-pill">Adobe Photoshop</span>
        <span className="skill-pill">React Bootstrap</span>
        <span className="skill-pill">Strapi</span>
        <span className="skill-pill">Node JS</span>
        <span className="skill-pill">Communication</span>
        <span className="skill-pill">JSON Web Token (JWT)</span>
        <span className="skill-pill">Web development</span>
        <span className="skill-pill">Adobe Illustrator</span>
        <span className="skill-pill">Project planning</span>
        <span className="skill-pill">Sketching & drawing</span>
        <span className="skill-pill">Prototype design</span>
        <span className="skill-pill">Project organization</span>
      </div>
    </div>
  );

  const educationContent = (
    <div className="education-part">
      <h1 className="education">Education</h1>
      <p className="education-p">
        2019-2023: Frontend development, Noroff 
      </p>
      <p className="education-p">
        2014-2018: Bachelor in History, UIS
      </p>
    </div>
  );

  return (
    <div className="right-content" style={rightContentStyle}>
      <div className="section">
        {activeLink === 'home' && (
          <>
            {aboutContent}
            <div>
              <h1 className="projects">Projects</h1>
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  <div className="project-card" id="project">
                    <img
                      src={project.image}
                      alt={`Project ${project.id}`}
                      className="project-image"
                      style={{ maxWidth: '150px', maxHeight: '100px' }}
                    />
                    <div className="project-details">
                      <h2 className="project-header">{project.header}</h2>
                      <p className="project-description">{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="project-tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {activeLink === 'profile' && aboutContent}

        {activeLink === 'projects' && (
          <div>
            <h1 className="projects-header">Projects</h1>
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div key={project.id} className="project-card">
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    className="project-image"
                    style={{ maxWidth: '150px', maxHeight: '100px' }}
                  />
                  <div className="project-details">
                    <h2 className="project-header">{project.header}</h2>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="project-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {activeLink === 'education' && (
          <>
            {educationContent}
            {academicExperienceContent}
          </>
        )}
      </div>
    </div>
  );
};

export default RightContent;
