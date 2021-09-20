import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #f5a8c5;
    margin: 0;
    padding: 60px 20px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.div`
    margin: 0 20px;
    
    input {
        width: 30vw;
        height: 10vh;
        border: solid 2px black;
        border-radius: 10px;
        font-size: 1.5rem;
        padding: 0 20px;

        @media screen and (max-width: 1000px) {
            width: 70vw;
            margin-bottom: 20px;
        }
    }
`;

export const Button = styled.button`
    background: #ee447d;
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
    border: none;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 3px 10px grey;
    margin: 0 20px;
    width: 200px;

    @media screen and (max-width: 1000px) {
        width: 75vw;
    }

    :hover {
        background: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
`;