import Card from "../../components/Card";
const Project =({project})=>{
    return(
        <>
        <Card className="portfolio_project">
          <div className="portfolio_project_image">
            <img src={project.image} alt="Portfolio Project Image"/>
          </div>
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
          <div className="portfolio_project_cta">
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">github</a>
          </div>

            </Card>
            </>
    );
}

export default Project;