import styled from 'styled-components';

import HappyIcon from '../../image/happy-icon.svg';
import MoneyIcon from '../../image/money-icon.svg';
import EmailIcon from '../../image/email-icon.svg';

export const Wrapper = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 40px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`;

export const Image = styled.img`
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    margin: 20px 40px;
    margin-left: 50px;

    @media screen and (max-width: 1000px) {
        width: 40vw;
        height: 40vw;
    }
`;

export const Points = styled.div`
    width: auto;
    margin: 20px 40px;
    padding: 0 20px;
    color: black;
    font-size: 2.5rem;
    font-weight: 400;

    @media screen and (max-width: 1000px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 645px) {
        font-size: 2rem;
    }
`;

export const Icon1 = styled.div`
    width: auto;
    background-image: url(${HappyIcon});
    background-size: 45px;
    background-repeat: no-repeat;
    background-position: center left;

    p {
        margin-left: 60px;
    }
`;

export const Icon2 = styled.div`
    width: auto;
    background-image: url(${MoneyIcon});
    background-size: 45px;
    background-repeat: no-repeat;
    background-position: center left;

    p {
        margin-left: 60px;
    }
`;

export const Icon3 = styled.div`
    width: auto;
    background-image: url(${EmailIcon});
    background-size: 45px;
    background-repeat: no-repeat;
    background-position: center left;

    p {
        margin-left: 60px;
    }
`;