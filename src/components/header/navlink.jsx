import { Link } from 'react-router-dom';
import { Ul } from './styles';

export const NavLink = props => {
    return (
        <Ul>
            <li> <Link to='sobreMim' className='link'>Sobre Mim</Link></li>
            <li> <Link to='comptencias' className='link'>Competências</Link></li>
            <li> <Link to='projetos' className='link'>Projetos</Link></li>
            <li> <Link to='projetos' className='link'>Contato</Link></li>
        </Ul>
    )
}