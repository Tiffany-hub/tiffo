import React, { useState } from 'react';
import styled from 'styled-components';
import {FaSearch } from 'react-icons/fa';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
const BoybandsPageContainer = styled.div`
  background-color: #89CFF0;
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
      name: "BTS",
      debutYear: 2013,
      imageUrl: "https://i.pinimg.com/236x/1c/ec/5a/1cec5a40973c4089b95e5465e15a054d.jpg",
    },
    {
      name: "Seventeen",
      debutYear: 2015,
      imageUrl: "https://i.pinimg.com/564x/71/ea/00/71ea00c10bf6d215b402c47c2cd760f1.jpg",
    },
    {
      name: "Ikon",
      debutYear: 2015,
      imageUrl: "https://i.pinimg.com/236x/a8/d7/e2/a8d7e26539c606f37f3716b3353af387.jpg",
     },
     {
        name: "TXT",
        debutYear: 2019,
        imageUrl: "https://i.pinimg.com/236x/aa/5c/d5/aa5cd5c38134e285b04feed5a3ede986.jpg",
      },
      {
        name: "2PM",
        debutYear: 2008,
        imageUrl: "https://i.pinimg.com/236x/de/76/a3/de76a380c5685012f0b9a98328291928.jpg",
      },
      {
        name: "MonstaX",
        debutYear: 2015,
        imageUrl: "https://i.pinimg.com/236x/51/c9/15/51c9156b0b2a8a064df3d0033892b615.jpg",
      },
      {
        name: "Enhypen",
        debutYear: 2020,
        imageUrl: "https://i.pinimg.com/236x/ed/5c/90/ed5c902e1a1879396beddd212a8d3762.jpg",
      },
      {
        name: "EXO",
        debutYear: 2012,
        imageUrl: "https://i.pinimg.com/236x/76/fe/d2/76fed22787d119739e1bcc284abc7454.jpg",
      },
      {
        name: "Ateez",
        debutYear: 2018,
        imageUrl: "https://i.pinimg.com/236x/97/5b/d3/975bd31a2ef65e0e3a0fdddb528af8e1.jpg",
      },
      {
        name: "SF9",
        debutYear: 2016,
        imageUrl: "https://i.pinimg.com/236x/44/98/2a/44982a5bc89c7f33a2926c65b136f670.jpg",
      },
      {
        name: "Astro",
        debutYear: 2016,
        imageUrl: "https://i.pinimg.com/236x/8b/58/88/8b5888f7f209ee44d735df882f4ff856.jpg",
      },
      {
        name: "Stray Kids",
        debutYear: 2018,
        imageUrl: "https://i.pinimg.com/236x/4e/db/6a/4edb6a1866b56867981399f0836314e9.jpg",
      },
      {
        name: "BTOB",
        debutYear: 2012,
        imageUrl: "https://i.pinimg.com/236x/00/48/92/00489263e11a4f24b0419b86d2512243.jpg",
      },
      {
        name: "NCT",
        debutYear: 2016,
        imageUrl: "https://i.pinimg.com/564x/91/4d/13/914d134b74647e57e7967c5b09109de6.jpg",
      },
      {
        name: "Big Bang",
        debutYear: 2006,
        imageUrl: "https://i.pinimg.com/564x/27/80/52/278052f77863dea8f6961956d990f5fb.jpg",
      },
      {
        name: "Treasure",
        debutYear: 2020,
        imageUrl: "https://i.pinimg.com/236x/f6/eb/1c/f6eb1c2ca50200711b17fa923a479dbc.jpg",
      },
      {
        name: "Pentagon",
        debutYear: 2016,
        imageUrl: "https://i.pinimg.com/236x/ce/29/61/ce2961312e33c1e0844481131bcc23f8.jpg",
      },
      {
        name: "ONEUS",
        debutYear: 2019,
        imageUrl: "https://i.pinimg.com/236x/ef/8f/17/ef8f178a0830f669796882c01b686e22.jpg",
      },
      {
        name: "GOT7",
        debutYear: 2014,
        imageUrl: "https://i.pinimg.com/236x/2e/38/ec/2e38ec5ea72eec1776913542029dec48.jpg",
      },
      {
        name: "WINNER",
        debutYear: 2013,
        imageUrl: "https://i.pinimg.com/236x/33/d1/ed/33d1ed2ff1aee5f038396ec8be2365ed.jpg",
      },
      {
        name: "SHINee",
        debutYear: 2008,
        imageUrl: "https://i.pinimg.com/564x/f3/7b/4b/f37b4b99a4807d2c4f803b88f0811eea.jpg",
      },
      
  ];

  const BoybandsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredBands = bands.filter((band) =>
      band.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        <BoybandsPageContainer>
          <Header onSearch={handleSearch} searchTerm={searchTerm} />
        <Title>Boybands</Title>
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
            <a href="/seventeen"> {/* This is the link to BlackpinkPage */}
              <BandImage src={band.imageUrl} alt={band.name} />
              <BandName>{band.name}</BandName>
              <DebutYear>Debut Year: {band.debutYear}</DebutYear>
            </a>
          </BandItem>
          ))}
        </BandContainer>
      </BoybandsPageContainer>
    );
  };
  
  export default BoybandsPage;
