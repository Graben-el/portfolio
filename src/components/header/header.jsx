import React from 'react';
import styled from 'styled-components';
import { NavLink } from './navlink';

export const Header = props => {
    return (
        <div style={{backgroundColor: '#d4d4d4', borderBottom: '3px solid #ff6600'}}>
            <Container>
                <h1>GABRIEL R<span>.</span>S<span>.</span></h1>
                <NavLink />
            </Container>
        </div>
    );
};

const Container = styled.header`
    display: flex;
    justify-content:  space-around;
    padding: 20px 60px;
    background-color: #d4d4d4;
    max-width: 1440px;
    margin: 0 auto;
    color: #000;

    h1 {
        margin-right: 50px;

        span {
            color: #ff6600;
        }
    }
`