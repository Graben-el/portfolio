import { faReact, faHtml5, faCss3Alt, faSass, faGithub, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SkillsContainer, Icons, IconsContainer } from "./styles"
import { SectionsHeader } from '../sectionsHeader/sectionsHeader'
import ts from '../../assets/imagens/ts1.png'
import native from '../../assets/imagens/native1.png'

export const Skills = () => {
    return (
        <SkillsContainer >
            <div data-aos='fade-down'  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <SectionsHeader h1={'Competências'} h2={''}/>
                <IconsContainer>
                    <h3>Atualmente Domino<span>:</span></h3>
                    <Icons>
                        <FontAwesomeIcon icon={faHtml5} className='icon odd'/>
                        <FontAwesomeIcon icon={faCss3Alt} className='icon'/>
                        <FontAwesomeIcon icon={faSass} className='icon odd'/>
                        <FontAwesomeIcon icon={faJs} className='icon'/>
                        <FontAwesomeIcon icon={faReact} className='icon odd'/>
                        <FontAwesomeIcon icon={faGithub} className='icon'/>
                    </Icons>
                </IconsContainer>
                <IconsContainer className='learning'>
                    <h3>Estou Estudando<span>:</span></h3>
                    <Icons>
                        <img src={ts} className='ts'/>
                        <img src={native} className='native'/>
                        <FontAwesomeIcon icon={faVuejs} className='icon odd'/>
                    </Icons>
                </IconsContainer>
            </div>
        </SkillsContainer>
    )
}