import { ExperiencePage }  from './ExperiencePage';
import { MainPage } from './MainPage';
import { PerfilPage } from './PerfilPage';
import { ProjectsPage } from './ProjectsPage';

export const Landing = () => {
    return (
        <>
            <MainPage />
            <PerfilPage />
            <ExperiencePage />
            <ProjectsPage />
        </>
    )
}