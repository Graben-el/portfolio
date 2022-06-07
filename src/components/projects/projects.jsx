import { SectionsHeader } from "../sectionsHeader/sectionsHeader"
import { Slider } from "./slider"
import { ProjectsContainer } from "./styles"

export const Projects = () => {
    return (
        <ProjectsContainer>
            <SectionsHeader h1={'Projetos'} h2={'Um pouco do meu trabalho'} />
            <Slider />

        </ProjectsContainer>
    )
}
