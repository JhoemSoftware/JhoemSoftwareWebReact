import { expeciences } from './../helpers/experience.js';

export const ExperiencePage = () => {
    return (
        <div id="ExperiencePage">
            {
                expeciences.map((p) =>
                    <div className="cardProject">
                        <img src={`/images/experiences/${p.img}.webp`} alt="Project Image" className="projectImg" width={80} height={80} />
                        <h3>{p.name}</h3>
                    </div>
                )
            }
        </div>
    )
}