import React, { useState } from 'react';
import styled from 'styled-components';
import {FaSearch } from 'react-icons/fa';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
const GirlbandsPageContainer = styled.div`
  background-color: #fcc7d0;
//   min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: left;
  margin-top: 0px;
`;

const SearchBar = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: none;
  text-align: center;
  width: 50%;
  font-size: 16px;
`;

const SearchIcon = styled(FaSearch)`
  margin-left: 10px;
  cursor: pointer;
`;



const BandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const BandItem = styled.div`
//   background-color: #fff;
  border-radius: 10px;
  margin: 35px;
  padding: 0px;
  text-align: center;
  cursor: pointer;
`;

const BandImage = styled.img`
  width: 200px; /* Increase the width for a rectangular shape */
  height: 300px; /* Keep the height */
  object-fit: cover;
  border-radius: 10px; /* Add border-radius for slight curve */
  margin-bottom: 10px;
`;


const BandName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DebutYear = styled.div`
  color: #888;
`;

const bands = [
    {
      name: "Blackpink",
      debutYear: 2016,
      imageUrl: "https://i.pinimg.com/236x/c1/ea/2c/c1ea2c8ff7ee1b9716955b8f8d78b1d4.jpg",
    },
    {
      name: "Itzy",
      debutYear: 2019,
      imageUrl: "https://i.pinimg.com/236x/30/78/38/30783861cb79170fbae335377ee00bc0.jpg",
    },
    {
      name: "2NE1",
      debutYear: 2009,
      imageUrl: "https://i.pinimg.com/236x/6d/df/0a/6ddf0a68b19d7eadc589927a8f4e7e95.jpg",
     },
     {
        name: "RedVelvet",
        debutYear: 2014,
        imageUrl: "https://i.pinimg.com/236x/84/ea/ea/84eaea058689325d946570374c943c79.jpg",
      },
      {
        name: "Apink",
        debutYear: 2011,
        imageUrl: "https://i.pinimg.com/236x/d8/96/66/d896662666090fa13ed25137f2c883b8.jpg",
      },
      {
        name: "Mamamoo",
        debutYear: 2014,
        imageUrl: "https://i.pinimg.com/236x/46/a2/ef/46a2efb2203b24e53a378dde98252ac1.jpg",
      },
      {
        name: "NewJeans",
        debutYear: 2022,
        imageUrl: "https://i.pinimg.com/236x/b4/07/e8/b407e882ced071c9af606c18beade68f.jpg",
      },
      {
        name: "Twice",
        debutYear: 2015,
        imageUrl: "https://i.pinimg.com/236x/19/a8/6f/19a86fac467bbf1a02edfacc1d6bc981.jpg",
      },
      {
        name: "GFriend",
        debutYear: 2015,
        imageUrl: "https://i.pinimg.com/236x/0b/86/db/0b86db3fd25d7aa44a6073d4a4740394.jpg",
      },
      {
        name: "Everglow",
        debutYear: 2019,
        imageUrl: "https://i.pinimg.com/236x/ca/4e/c2/ca4ec259bba6f47a10d7039a50633bee.jpg",
      },
      {
        name: "Fromis-9",
        debutYear: 2017,
        imageUrl: "https://i.pinimg.com/236x/70/01/55/700155f4217dee6465fc3913db2a102c.jpg",
      },
      {
        name: "(G) I-dle",
        debutYear: 2018,
        imageUrl: "https://i.pinimg.com/236x/b3/4a/7b/b34a7ba71325f387e32266a7f6ffd7f0.jpg",
      },
      {
        name: "Momoland",
        debutYear: 2016,
        imageUrl: "https://i.pinimg.com/236x/72/f5/99/72f599ded13be7add715b286ba6d08e7.jpg",
      },
      {
        name: "AOA",
        debutYear: 2012,
        imageUrl: "https://i.pinimg.com/236x/71/98/6f/71986f9b84f0a99e29e88e584eb14e4b.jpg",
      },
      {
        name: "Girls Generation",
        debutYear: 2007,
        imageUrl: "https://i.pinimg.com/236x/57/01/d7/5701d709b20c1f4586ada9a1503c659c.jpg",
      },
      {
        name: "Oh My Girl",
        debutYear: 2015,
        imageUrl: "https://i.pinimg.com/236x/23/f2/7d/23f27da26225478e846a3db25d8a7da3.jpg",
      },
      {
        name: "EXID",
        debutYear: 2012,
        imageUrl: "https://i.pinimg.com/236x/55/30/fb/5530fbff37012a880ae54cdffb7b2e35.jpg",
      },
      {
        name: "Dream catcher",
        debutYear: 2017,
        imageUrl: "https://i.pinimg.com/236x/9d/d4/8c/9dd48c12b8f45844b0357cd682ea15d4.jpg",
      },
      {
        name: "CLC",
        debutYear: 2015,
        imageUrl: "https://i.pinimg.com/236x/1f/9c/14/1f9c1484a9c48526671df108a1e54a1e.jpg",
      },
      {
        name: "LOONA",
        debutYear: 2017,
        imageUrl: "https://i.pinimg.com/236x/25/06/3e/25063e0dcb3497ca95b385b636975571.jpg",
      },
      {
        name: "Le Sserafim",
        debutYear: 2022,
        imageUrl: "https://i.pinimg.com/236x/ec/0c/ac/ec0cacf16bc751f4af0f9d97f65a6263.jpg",
      },
      
  ];

  const GirlbandsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredBands = bands.filter((band) =>
      band.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        <GirlbandsPageContainer>
          <Header onSearch={handleSearch} searchTerm={searchTerm} />
        <Title>Girlbands</Title>
        <SearchBar>
          <SearchInput
            placeholder="Find your band"
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchIcon className="fas fa-search"></SearchIcon>
        </SearchBar>
        <BandContainer>
          {filteredBands.map((band, index) => (
            <BandItem key={index}>
            <a href="/blackpink"> {/* This is the link to BlackpinkPage */}
              <BandImage src={band.imageUrl} alt={band.name} />
              <BandName>{band.name}</BandName>
              <DebutYear>Debut Year: {band.debutYear}</DebutYear>
            </a>
          </BandItem>
          ))}
        </BandContainer>
      </GirlbandsPageContainer>
    );
  };
  
  export default GirlbandsPage;
