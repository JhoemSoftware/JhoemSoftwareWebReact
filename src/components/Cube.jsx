import { skills } from './../helpers/skills.js';

export const Cube = () => {
    return (
        <div className="cube">
            {
                skills.map((s) => <figure key={ s }><img src={`/images/icons/${s}.webp`} alt="Skill Image" width={20} height={20} /></figure>)
            }
        </div>
    )
}