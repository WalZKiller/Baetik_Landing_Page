import React from 'react';

//Styles
import { Wrapper, Input, Button } from './EmailBar.styles';

const EmailBar = () => (
    <Wrapper>
        <Input>
            <input type="text" placeholder="Enter your email"></input>
        </Input>
        <Button>Join Now!</Button>
    </Wrapper>
)

export default EmailBar;