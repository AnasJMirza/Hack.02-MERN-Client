import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import Card from './Card';
import axios from '../axios.js'

import img1 from '../assets/images/main5.jpg'
import img2 from '../assets/images/main6.jpg'
import img3 from '../assets/images/main7.jpg'

const TopAreas = (props) => {


    const [post, setPost] = React.useState([]);

    useEffect(()=>{
        const getPosts = async ()=>{
            try {
                const res = await axios.get('/posts/random');
                console.log(res.data);
                setPost(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getPosts()
    },[])


    return (
        <Container>
            <Heading>{props.heading}</Heading>
            <Buttons>
             <Button style={{backgroundColor: "#FF6767", color: "white"}}>Islamabad</Button>   
             <Button>Lahore</Button>   
             <Button>Karachi</Button>   
             <Button>Peshawar</Button>   
            </Buttons>
            <Info>
                <Rent>
                    <HomeIcon />
                    For Rent:
                    <Numbers>3253</Numbers>
                </Rent>
                <Sale>
                <HomeIcon />
                    For Sale:
                    <Numbers>4712</Numbers>
                </Sale>
            </Info>

            <CardWrapper>
            {
                post.map((post)=>{
                    return <Card post={post} />
                })
            }
            </CardWrapper>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    );
};

export default TopAreas;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: 0px 7vw ;
`;
const Heading = styled.div`
    font-size: 20px;
    /* margin-top: 4vh; */
    color: grey;
`;

const Buttons = styled.div`
    display: flex;
    gap: 5px;
    margin: 10px 0px;
    color: grey;
    
`;
const Button = styled.div`
    padding: 7px 15px;
    background-color: white;
    border: 0.5px solid #E5E5E5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    :hover{
        background-color: #ff6767;
        color: white;
    }
`;
const Info = styled.div`
    display: flex;
    gap:15px;
    align-items: center;
    color: #737373;
    font-size: 16px;
    background-color: #E8E8E8;
    height: 7vh;
    padding-left: 1vw;
    border-radius: 4px;
    margin-bottom: 20px;
`;
const Rent = styled.div`
display: flex;
    gap:5px;
    align-items: center;
`;
const Sale = styled.div`
display: flex;
    gap:5px;
    align-items: center;
`;

const Numbers = styled.div`
    color: #ff6767;
    font-weight: bold;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vw;
    flex-wrap: wrap;
`;


