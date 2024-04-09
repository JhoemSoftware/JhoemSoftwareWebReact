import { skills } from './../helpers/skills.js';

export const Cube = () => {
    return (
        <div className="cube">
            {
                skills.map((s) => <figure key={ s }><img src={`/images/icons/${s}.webp`} alt="Skill Image" width={200} height={200} /></figure>)
            }
        </div>
    )
}