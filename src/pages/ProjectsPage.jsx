export const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            name: 'GitHub Search Repos',
            img: 'project1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi, nisi sapiente unde',
            tecnologies: [
                'mongo',
                'express',
                'react',
                'node',
                'js',
                'tailwind'
            ]
        },
        {
            id: 2,
            name: 'GitHub Search Repos 2',
            img: 'project1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi, nisi sapiente unde',
            tecnologies: [
                'html',
                'css',
                'bootstrap',
                'js'
            ]
        },
    ];

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
