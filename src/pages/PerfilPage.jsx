import { Cube } from './../components/Cube';

export const PerfilPage = () => {
    return (
        <div id="PerfilPage">
            <div className="info">
                <img src="/jhoemAzul.webp" alt="Jhoem Firm" width={250} height={250} />
                <p>
                    Hi! 👋🏼 I'm Jhon Alex Marín, Full Stack software developer with experience in the implementation of information systems and web development.
                </p>
            </div>
            <Cube />
        </div>
    )
}