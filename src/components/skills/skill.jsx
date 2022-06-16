import { faReact, faHtml5, faCss3Alt, faSass, faGithub, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SkillsContainer, Icons, IconsContainer } from "./styles"
import { SectionsHeader } from '../sectionsHeader/sectionsHeader'
import ts from '../../assets/imagens/ts1.png'
import native from '../../assets/imagens/native1.png'

export const Skills = () => {
    return (
        <SkillsContainer >
            <div data-aos='fade-down'  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%'}}>
                <SectionsHeader h1={'Competências'} h2={''}/>
                <IconsContainer>
                    <h3>Atualmente Domino<span>:</span></h3>
                    <Icons>
                        <FontAwesomeIcon title='HTML 5' icon={faHtml5} className='icon odd'/>
                        <FontAwesomeIcon title='CSS 3' icon={faCss3Alt} className='icon'/>
                        <FontAwesomeIcon title='SASS/SCSS' icon={faSass} className='icon odd'/>
                        <FontAwesomeIcon title='JavaScript' icon={faJs} className='icon'/>
                        <FontAwesomeIcon title='React JS' icon={faReact} className='icon odd'/>
                        <FontAwesomeIcon title='Git/Github' icon={faGithub} className='icon'/>
                    </Icons>
                </IconsContainer>
                <IconsContainer className='learning' style={{maxWidth: '100%'}}>
                    <h3>Estou Estudando<span>:</span></h3>
                    <Icons>
                        <img src={ts} className='ts' title='TypeScript'/>
                        <img src={native} className='native' title='React Native'/>
                        <FontAwesomeIcon icon={faVuejs} className='icon odd' title='Vue.js'/>
                    </Icons>
                </IconsContainer>
            </div>
        </SkillsContainer>
    )
}