
import './Projects.css';

const ProjectItem = ({ title, desc }) => (
  <a href="#0" className="project-item">
    <div className="item-inner">
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="item-footer">
        <div className="item-person">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/324479/me.jpg" alt="Person" />
          <span>Jhon Cena</span>
        </div>
        <div className="date">
          <h5>1/1/2016</h5>
        </div>
      </div>
    </div>
  </a>
);

const Projects = () => (
    
      <div className="project-list">
        <ProjectItem title="BI" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="RGA" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Jenkins" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
         <ProjectItem title="BI" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="RGA" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Jenkins" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="IIS" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Project 5" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Project 6" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Project 7" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Project 8" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Project 9" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
        <ProjectItem title="Project 10" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam" />
      
        {/* Repeat ProjectItem for other projects */}
      </div>
);

export default Projects;
