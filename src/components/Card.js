import React from 'react';
import styled from 'styled-components';
import cardImg from '../assets/images/cardImg.jpg'

const Card = (props) => {
    return (
        <Container>
            <Img  src={props.img} />
                
            <Info>
                <Address>
                    <City>Islamabad</City>
                    <Street>Bani Gala</Street>
                </Address>
                <Price>PKR 85 lac - 1.38 crore</Price>
            </Info>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    width: 310px;
    border: 0.5px solid grey;
    padding: 4px;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
    }
`;


const Img = styled.img`
    width: 300px;
`;
const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-top: 4px;
    padding: 0px 10px;
`;
const Price = styled.div`
    color: #ff6767;
    font-weight: bold;
`;
const Address = styled.div``;
const City = styled.div`
    font-size: 14px;
`;
const Street = styled.div`
    font-size: 18px;
    color: gray;
`;