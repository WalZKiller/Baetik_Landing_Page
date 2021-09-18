import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #f5a8c5;
    margin: 0;
    padding: 20px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Input = styled.div`
    margin: 0 20px;
    border: solid 1px black;
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
    transition: 0.3s;

    :hover {
        background: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
`;