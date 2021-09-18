import React from 'react';

//Styles
import { Wrapper, Title, Description } from './Header.styles';

const Header = () => (

    <Wrapper>
        <Title>
            <h1>SUPER BAE-TIK DISCOUNTS</h1>
        </Title>
        <Description>
            <p>Up to 40% discounts on our <em>kek batik</em>, simply by signing up your email!</p>
        </Description>
    </Wrapper>
);

export default Header;