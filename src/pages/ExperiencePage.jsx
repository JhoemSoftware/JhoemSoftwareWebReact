import { expeciences } from './../helpers/experience.js';

export const ExperiencePage = () => {
    return (
        <div id="ExperiencePage">
            <div className="infoExperiences">
                <h1>Work Experiences 👨🏻‍💻</h1>
                <p>Below you will find my work experience. In each one I specify the time worked and the technologies with which I have worked in that place.</p>
                <div className="works">
                    {
                        expeciences.map((e) =>
                            <div className='experienceCard'>
                                <img src={`/images/experiences/${e.img}.webp`} alt="Project Image" className="projectImg" width={80} height={80} />
                                <div className="content">
                                    <h4>{e.name}</h4>
                                    <p>{e.description}</p>
                                    <div className="tecnologies-experiences">
                                        {
                                            e.tecnologies.map(pt => <img key={pt} src={`/images/icons/${pt}.png`} alt="Icon Tecnology" width={40} height={40} />)
                                        }
                                    </div>
                                    <small>{e.date_in} - {e.date_out}</small>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}