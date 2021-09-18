import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #ee447d;
    margin: 0;
    padding: 10px 20px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Title = styled.div`
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin: 0 20px;

    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`;

export const Description = styled.div`
    color: white;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin: 0 20px;


    @media screen and (max-width: 700px) {
        font-size: 1.5rem;
    }
`;