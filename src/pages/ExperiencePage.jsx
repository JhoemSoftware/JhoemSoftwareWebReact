import { expeciences } from './../helpers/experience.js';

export const ExperiencePage = () => {
    return (
        <div id="ExperiencePage">
            <div className="infoExperiences">
                <h1>Work Experiences 👨🏻‍💻</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae voluptates voluptas dolorem expedita esse eum, et delectus impedit asperiores incidunt dolorum cumque nobis sunt? Impedit sed rerum eligendi ipsa!</p>
                <div className="works">
                    {
                        expeciences.map((p) =>
                            <div className='experienceCard'>
                                <img src={`/images/experiences/${p.img}.webp`} alt="Project Image" className="projectImg" width={80} height={80} />
                                <p>{p.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}