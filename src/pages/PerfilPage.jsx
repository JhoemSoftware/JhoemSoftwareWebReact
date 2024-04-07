import { Cube } from './../components/Cube';

export const PerfilPage = () => {
    return (
        <div id="PerfilPage">
            <div className="info">
                <img src="/jhoemAzul.webp" alt="Jhoem Firm" width={250} height={250}/>
                <p>
                Hi! 👋🏼 I'm Jhon Alex Marín, Full Stack software developer with two years of experience in the implementation of information systems and web development. Here are my skills and some of my developed projects 👨🏻‍💻
                </p>
            </div>
            <Cube />
        </div>
    )
}