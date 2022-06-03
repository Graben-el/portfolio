import { NavLink } from './navlink';
import logo from '../../assets/logo/logo.png'
import { Container } from './styles';

export const Header = props => {
    return (
        <div style={{backgroundColor: 'var(--secondary-color)'}}>
            <Container>
                <img src={logo} />
                <NavLink />
            </Container>
        </div>
    );
};

