import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100vw;
    margin: 40px 40px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FreeCakes = styled.div`
    text-align: center;
    width: 26vw;
    margin: 0 20px;

    h3 {
        font-size: 2rem;
        font-weight: 400;

        @media screen and (max-width: 645px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 2rem;
        font-weight: 200;

        @media screen and (max-width: 645px) {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 70vw;
    }
`;

export const SpecialDiscounts = styled.div`
    text-align: center;
    width: 26vw;
    margin: 0 20px;

    h3 {
        font-size: 2rem;
        font-weight: 400;

        @media screen and (max-width: 645px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 2rem;
        font-weight: 200;

        @media screen and (max-width: 645px) {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 70vw;
    }
`;

export const NewFlavourUpdates = styled.div`
    text-align: center;
    width: 26vw;
    margin: 0 20px;

    h3 {
        font-size: 2rem;
        font-weight: 400;

        @media screen and (max-width: 645px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 2rem;
        font-weight: 200;

        @media screen and (max-width: 645px) {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 70vw;
    }
`;
