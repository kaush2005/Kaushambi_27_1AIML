import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'];
const projects = [
  { title: 'Product Management API', detail: 'A REST API for creating, viewing, updating and deleting product records.' },
  { title: 'E-commerce Demo', detail: 'A shopping interface with cart, demo checkout and seller product management.' },
  { title: 'University Finder', detail: 'A JavaScript application that searches universities by country using a public API.' }
];

export default function App() {
  return <><header className="site-header"><a className="brand" href="#home">MyPortfolio</a><nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav></header>
    <main><section className="hero" id="home"><div><p className="eyebrow">HELLO, I'M</p><h1>Your Name</h1><h2>Student & Aspiring Full Stack Developer</h2><p>I enjoy learning web technologies and building useful, responsive applications.</p><a className="button" href="#projects">View My Work</a></div><div className="hero-card"><div className="avatar">YN</div><p>Learning • Building • Improving</p></div></section>
    <section id="about" className="section"><p className="eyebrow">INTRODUCTION</p><h2>About Me</h2><p>I am a computer applications student interested in frontend development, backend development and database technologies. I like turning ideas into practical projects and continuously improving my skills.</p></section>
    <section id="skills" className="section"><p className="eyebrow">WHAT I USE</p><h2>My Skills</h2><div className="skills">{skills.map(skill=><span key={skill}>{skill}</span>)}</div></section>
    <section id="projects" className="section"><p className="eyebrow">SELECTED WORK</p><h2>My Projects</h2><div className="projects">{projects.map(project=><article className="project" key={project.title}><h3>{project.title}</h3><p>{project.detail}</p></article>)}</div></section>
    <section id="contact" className="section contact"><p className="eyebrow">GET IN TOUCH</p><h2>Contact Me</h2><p>Have a project idea or opportunity? Feel free to reach out.</p><a className="button" href="mailto:your.email@example.com">Send Email</a></section></main>
    <footer>© {new Date().getFullYear()} Your Name. Built with React.</footer></>;
}
