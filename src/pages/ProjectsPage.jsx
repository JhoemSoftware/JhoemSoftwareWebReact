import { Button } from '../components/Button.jsx';
import { projects } from './../helpers/projects.js';

export const ProjectsPage = () => {
    return (
        <>
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
                                    <div className="buttons">
                                        <Button text='View GitHub' open={true} iconImg='git' url={p.url_github} />
                                        <Button text='View Site' open={true} iconImg='eye' url={p.url_web} />
                                    </div>
                                    <div className="tecnologies-card-project">
                                        {
                                            p.tecnologies.map(pt => <img key={pt} src={`/images/icons/${pt}.webp`} alt="Icon Project Tecnology" />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <footer>
                <h3>Let's work together!</h3>
                <p>
                    I like challenges, so don't ask me if something can be done, just let me know when we start
                    programming 😎
                </p>
                {/* <small>Me gustan los retos y los desafíos por lo cual no me preguntes si algo se puede hacer, mejor
                    indícame cuando comenzamos a programar 😎</small> */}
                <small class="footerFirma">Built with ❤️ by <b>JhoemSoftware</b></small>
            </footer>
        </>
    )
}