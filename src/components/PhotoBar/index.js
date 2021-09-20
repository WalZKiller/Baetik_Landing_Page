import React from 'react';

//Image
import Logo from '../../image/LogoBaetik.png';

//Styles
import { Wrapper, Image, Points, Icon1, Icon2, Icon3 } from './PhotoBar.styles';

const PhotoBar = () => (
    <Wrapper>
        <Image src={Logo}/>
        {/* <IconsAlignment>
            <Icon1 src={HappyIcon} alt='happy-icon' />
            <Icon2 src={MoneyIcon} alt='money-icon' />
            <Icon3 src={EmailIcon} alt='email-icon' />
        </IconsAlignment> */}
        <Points>
            <Icon1>
                <p>Free Cakes</p>
            </Icon1>
            <Icon2>
                <p>Special Discounts</p>
            </Icon2>
            <Icon3>
                <p>New Flavour Updates</p>
            </Icon3>
        </Points>
    </Wrapper>
)

export default PhotoBar;