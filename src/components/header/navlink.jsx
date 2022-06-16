import { NavContainer, Ul } from './styles';
import { Link } from 'react-scroll'
import { stack as Menu } from 'react-burger-menu'
import { useState } from 'react';

export const NavLink = () => {

    const [menuState, setState] = useState({
        menuOpen: false
    })
   
   const handleStateChange = state => {
        setState({
            menuOpen: state.isOpen
        })
   }

    const closeMenu = () => {
        setState({
            menuOpen: false
        })
    }
    
    return (
        <NavContainer>
            <Ul>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='aboutme' className='aboutme'>Sobre Mim</Link></li>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='skills' className='skil'>Competências</Link></li>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='projects' className='projects'>Projetos</Link></li>
                <li> <Link activeClass='active' spy={true} smooth={true} duration={2000} to='contact' className='contact'>Contato</Link></li>
            </Ul>
            <Menu 
                right 
                isOpen={menuState.menuOpen}
                onStateChange={state => handleStateChange(state)}
            >
                <ul>
                    <li> <Link 
                    activeClass='active' 
                    spy={true} 
                    smooth={true} 
                    duration={2000} to='aboutme' 
                    className='aboutme'
                    onClick={() => closeMenu()}>Sobre Mim</Link></li>
                    <li> <Link 
                    activeClass='active' 
                    spy={true} 
                    smooth={true} 
                    duration={2000} to='skills' 
                    className='skil' 
                    onClick={() => closeMenu()}>Competências</Link></li>
                    <li> <Link 
                    activeClass='active' 
                    spy={true} 
                    smooth={true} 
                    duration={2000} 
                    to='projects' 
                    className='projects' 
                    onClick={() => closeMenu()}>Projetos</Link></li>
                    <li> <Link 
                    activeClass='active' 
                    spy={true} 
                    smooth={true} 
                    duration={2000} 
                    to='contact' 
                    className='contact' 
                    onClick={() => closeMenu()}>Contato</Link></li>
                </ul>
            </Menu>
        </NavContainer>

    )
}