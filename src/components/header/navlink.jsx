import { NavContainer, Ul } from './styles';
import { Link } from 'react-scroll'
import { stack as Menu } from 'react-burger-menu'

export const NavLink = props => {
    return (
        <NavContainer>
            <Ul>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='aboutme' className='aboutme'>Sobre Mim</Link></li>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='skills' className='skil'>Competências</Link></li>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='projects' className='projects'>Projetos</Link></li>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='contact' className='contact'>Contato</Link></li>
            </Ul>
            <Menu noOverlay style={{}}>
                <ul>
                    <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='aboutme' className='aboutme'>Sobre Mim</Link></li>
                    <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='skills' className='skil'>Competências</Link></li>
                    <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='projects' className='projects'>Projetos</Link></li>
                    <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='contact' className='contact'>Contato</Link></li>
                </ul>
            </Menu>
        </NavContainer>

    )
}