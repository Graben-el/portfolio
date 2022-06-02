import { NavLink } from './navlink';
import logo from '../../assets/logo/logo.png'
import { Container } from './styles';

export const Header = props => {
    return (
        <div style={{backgroundColor: '#c5c5c5', borderBottom: '3px solid #ff6600'}}>
            <Container>
                <img src={logo} />
                <NavLink />
            </Container>
        </div>
    );
};

