export const ProjectsPage = () => {
    return (
        <div id="ProjectPage">
            <div className="cardProject">
                <div className="card-project-header">
                    <img src="/images/projects/project1.webp" alt="Project Image" className="projectImg" />
                    <h3>GitHub Search Repos</h3>
                </div>
                <div className="card-project-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi, nisi sapiente unde
                    </p>
                    <div className="tecnologies-card-project">
                        <img src="/images/icons/mongo.webp" alt="Icon Project Tecnology" />
                        <img src="/images/icons/express.webp" alt="Icon Project Tecnology" />
                        <img src="/images/icons/react.webp" alt="Icon Project Tecnology" />
                        <img src="/images/icons/node.webp" alt="Icon Project Tecnology" />
                        <img src="/images/icons/js.webp" alt="Icon Project Tecnology" />
                        <img src="/images/icons/tailwind.webp" alt="Icon Project Tecnology" />
                    </div>
                </div>
            </div>
        </div>
    )
}
