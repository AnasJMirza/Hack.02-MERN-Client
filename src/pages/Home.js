import React, {useState} from "react";
import styled from "styled-components";
// import BGImg from '../assets/images/mainbg.jpg';
import BGImg from "../assets/images/main4.jpg";
import Navbar from "../components/Navbar";
import PageviewIcon from '@mui/icons-material/Pageview';
import TopAreas from "../components/TopAreas";
import main8 from '../assets/images/main8.jpg'
import Footer from "../components/Footer";


const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <BGImage>
        <Navbar />
        <Content>
          <Heading>Pakistan's 1st Online Real Estate Marketplace</Heading>
          <Sections>
            <Section>Rent</Section>
            <Section>Buy</Section>
            <Section>Invest</Section>
          </Sections>
          <SearchBar>
            <Location>
              Location
              <Input placeholder="City, Area Etc" onChange={ (e)=> setSearchTerm(e.target.value)}/>
            </Location>
            <PropertyType>
              Property Type
              <Input placeholder="All Residential" />
            </PropertyType>
            <SearchIcon>
            <PageviewIcon sx={{ fontSize: "50px" }}/>
            </SearchIcon>
          </SearchBar>
          <Subinfo>
          <Info>Don't want to hassle?</Info>
          <Tagline>Let us handle everything for you</Tagline>
          <Button>Wanted</Button>
          </Subinfo>
        </Content>
      </BGImage>

    {/* Section2 */}

    <TopAreas heading="Top areas by city" searchTerm={searchTerm}/>
    <TopAreas heading="Investment Projects to put your money in motion" searchTerm={searchTerm}/>
    <TopAreas heading="Recent Properties for Rent" searchTerm={searchTerm}/>

    <CTA>
        <CTAHeading>We have a buyer for every property</CTAHeading>
        <CTASubHeading>List your properties and sell to more than 2 million buyers that visit graana.com every month</CTASubHeading>
        <CTAButton>Try Selling</CTAButton>
    </CTA>

    <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
const BGImage = styled.div`
  background-image: url(${BGImg});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
  margin-bottom: 10vh;
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  height: 79vh;
  
`;

const Heading = styled.div`
  font-size: 20px;
  color: white;
  word-spacing: 2px;
`;

const Sections = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.38);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.9px);
  -webkit-backdrop-filter: blur(8.9px);
  border: 1px solid rgba(255, 255, 255, 0.33);

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  width: 20vw;
  height: 6vh;

  margin-top: 25px;
  margin-bottom: 17px;
`;

const Section = styled.div`
  cursor: pointer;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease-in-out;

  :hover {
    background-color: white;
    color: grey;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 60vw;
  height: 12vh;
  background-color: white;
  border-radius: 3px;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 15px 0px 6px 15px;
`;

const PropertyType = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 0px 6px 15px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  margin-top: 6px;
  :focus {
    outline: none !important;
  }
`;

const SearchIcon = styled.div`
    color: #ff6767;
    display: flex;
    align-items: center;
    margin-right: 15px;
`

const Subinfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.div`
    margin-top: 10vh;
    color:white;
`;
const Tagline = styled.div`
    color:white;
    margin-top: 7px;
    margin-bottom: 7px;
    font-size: 22px;
`;
const Button = styled.div`
    color:white;
    background-color: #ff6767;
    padding: 10px 15px;
    border-radius: 5px;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover{
        background-color: maroon;
    }

`

const CTA = styled.div`
    background-image: url(${main8});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 50px 100px;
    height: 80vh;
    border-radius: 10px;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 4vw;
    
`;

const CTAHeading = styled.div`
    font-size: 28px;
    font-weight: bold;
`;
const CTASubHeading = styled.div`
    font-size: 16px;
    margin: 10px 0px;
    width: 40%;
`;
const CTAButton = styled.div`
    padding: 10px 15px;
    background-color: grey;
    width: 10vw;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;