import React from 'react';

//Styles
import { Wrapper, FreeCakes, SpecialDiscounts, NewFlavourUpdates } from './DescriptionBar.styles';

const DescriptionBar = () => (
    <Wrapper>
        <FreeCakes>
            <h3>Free Cakes</h3>
            <p>Grab your chance to win free bae-tik cakes by joining our monthly giveaway!</p>
        </FreeCakes>
        <SpecialDiscounts>
            <h3>Special Discounts</h3>
            <p>Get bigger discounts the more you purchase!</p>
        </SpecialDiscounts>
        <NewFlavourUpdates>
            <h3>New Flavour Updates</h3>
            <p>With many exclusive flavours waiting to be released, be the early birds to taste them.</p>
        </NewFlavourUpdates>
    </Wrapper>
)

export default DescriptionBar;