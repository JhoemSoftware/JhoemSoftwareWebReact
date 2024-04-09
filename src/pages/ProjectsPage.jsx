import { projects } from './../helpers/projects.js';

export const ProjectsPage = () => {
    return (
        <div id="ProjectPage">
            {
                projects.map((p) =>
                    <div className="cardProject" key={p.id}>
                        <div className="cardProject">
                            <div className="card-project-header">
                                <img src={`/images/projects/${p.img}.webp`} alt="Project Image" className="projectImg" />
                                <h3>{p.name}</h3>
                            </div>
                            <div className="card-project-body">
                                <p>{p.description}</p>
                                <div className="tecnologies-card-project">
                                    {
                                        p.tecnologies.map( pt => <img key={pt} src={`/images/icons/${pt}.webp`} alt="Icon Project Tecnology" />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
