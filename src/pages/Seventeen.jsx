import React from 'react';
import styled from 'styled-components';
import MemberDetail from './Member';
import Header from '../components/Header';
import songs from './Seventeensongs';
import SeventeenGallery from './Seventeengallery';

const SeventeenPageContainer = styled.div`
  background-color: #B3CEE5; 
  color: black; /* White */
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 0px;
  color: 5A5A5A; 
`;

const History = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

const SongsHeading = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
  color: #ff69b4;
`;

const AlbumsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Album = styled.div`
  margin: 40px;
  text-align: left;
`;

const AlbumImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10%;
  object-fit: cover;
`;

const AlbumTitle = styled.h4`
  font-size: 20px;
  color: #ff69b4;
  margin-bottom: 10px;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Song = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
`;

const MembersHeading = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
  color: #ff69b4;
`;


const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Create four equal-width columns */
  gap: 20px; /* Add some spacing between the members */
  margin-top: 20px;
`;


const Member = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  text-alighn: center;
`;

const MemberName = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

const MemberInfo = styled.p`
  font-size: 16px;
  text-align: center;
`;

const SongsLink = styled.a`
  display: block;
  text-align: right;
  font-size: 20px;
  color: #ff69b4; /* Hot Pink */
  margin-top: 30px;
  text-decoration: none;
  cursor: pointer;
`;

const GalleryLink = styled.a`
  display: block;
  text-align: right;
  font-size: 20px;
  color: #ff69b4; /* Hot Pink */
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const SeventeenPage = () => {
  const members = [
    {
      name: 'S.Coups',
      fullname: ' Choi Seungcheol',
      position: 'Leader, rapper',
      imageUrl:
        'https://i.pinimg.com/236x/38/eb/f6/38ebf640210ac1791b557a378f87f25f.jpg',
      Birthday: '8th August 1995',
      info:
        'S.Coups, born Choi Seungcheol, was the first member of Seventeen to be officially introduced to the public through various pre-debut projects. He trained with Pledis Entertainment for several years before debuting with Seventeen.',
    },
    {
      name: 'Jeonghan',
      fullname: 'Yoon Jeonghan',
      position: 'Vocalist',
      imageUrl:
        'https://i.pinimg.com/236x/2a/41/99/2a41998e8d988ccdab12c76ecd8f8a78.jpg',
      Birthday: 'October 5th 1995',
      info:
        'Jeonghan, born Yoon Jeonghan, is known for his ethereal beauty and is often referred to as the "Angel" of the group. He is known to be one of the quieter members but has a strong presence on stage.',
    },
    {
      name: 'Joshua',
      fullname: 'Hong Jisoo',
      position: 'Vocalist',
      imageUrl:
        'https://i.pinimg.com/564x/d6/d7/35/d6d735cb668d0f8d62b6aa570fbf4105.jpg',
      Birthday: 'December 30th 1995',
      info:
        'Joshua, born Hong Jisoo, was born and raised in Los Angeles, California, making him the first American member of Seventeen. He is fluent in English and often helps with translations for international activities',
    },
    {
      name: 'Jun',
      fullname: 'Wen Junhui',
      Position: 'Dancer, Vocalist',
      imageUrl:
        'https://i.pinimg.com/236x/d0/35/2c/d0352c11459eb354e02e2a59eeb3a2fd.jpg',
      Birthday: 'June 10th 1996',
      info:
        'Jun, born Wen Junhui, is a Chinese member of Seventeen and is known for his stunning visuals and graceful dance moves. He participated in the Chinese version of Produce 101 prior to joining Seventeen..',
    },
    {
        name: 'Hoshi',
        fullname: 'Kwon Soon Young',
        Position: 'Performance team leader, main dancer, member of BSS',
        imageUrl:
          'https://i.pinimg.com/236x/a9/40/c2/a940c24ff9a0dff87a54f35d2f594a3e.jpg',
        Birthday: 'June 15th 1996',
        info:
          'Hoshi, born Kwon Soon Young, is the leader of Seventeen Performance Team and is known for his exceptional dancing skills. He is also a charismatic performer on stage.',
      },
      {
        name: 'Wonwoo',
        fullname: 'Jeon Wonwoo',
        Position: 'Lead rapper, Sub-Vocalist',
        imageUrl:
          'https://i.pinimg.com/236x/aa/bd/d1/aabdd153ee3386f5808db23732565e45.jpg',
        Birthday: 'July 17th 1996',
        info:
          'Wonwoo, born Jeon Wonwoo, is known for his introspective and thoughtful nature. He is also recognized for his deep, resonant rap style which adds a unique flavor to Seventeen music.',
      },
      {
        name: 'Woozi',
        fullname: 'Lee Jihoon',
        Position: 'Vocal team leader, lead vocalist',
        imageUrl:
          'https://i.pinimg.com/236x/bc/d3/71/bcd371e3c9e539714e51e1971625a066.jpg',
        Birthday: 'June 10th 1996',
        info:
          "Woozi, born Lee Jihoon, is the leader of Seventeen's Vocal Team. He is a highly skilled singer, composer, and producer. Many of Seventeen's hit songs have been composed by Woozi.",
      },
      {
        name: 'DK',
        fullname: 'Lee Seokmin',
        Position: 'Main Vocalist, Leader BSS',
        imageUrl:
          'https://i.pinimg.com/236x/64/fb/5b/64fb5bb33f48cf8c0740a27cc7017953.jpg',
        Birthday: 'February 18th 1997',
        info:
          'DK, born Lee Seokmin, is the main vocalist of Seventeen known for his powerful and emotive vocals. He is often praised for his vocal range and ability to convey deep emotions through his singing.',
      },
      {
        name: 'Mingyu',
        fullname: 'Kim Mingyu',
        Position: 'Lead Rapper, Sub Vocalist, Visual',
        imageUrl:
          'https://i.pinimg.com/236x/75/12/7f/75127f0491cb31eeee802fd8d165ba90.jpg',
        Birthday: 'April 6th 1997',
        info:
          'Mingyu, born Kim Mingyu, is the tallest member of Seventeen and is often noted for his striking visuals. He is a versatile talent, excelling as a rapper and vocalist.',
      },
      {
        name: 'The8',
        fullname: 'Xu Minghao',
        Position: 'lead Dancer, Sub Vocalist',
        imageUrl:
          'https://i.pinimg.com/236x/19/68/30/196830a92c3e3b495f855526779986d3.jpg',
        Birthday: 'November 7th 1997',
        info:
          'The8, born Xu Minghao, is known for his incredible dancing skills. He is also the first Chinese member to debut with Seventeen and plays a significant role in the group dance performances.',
      },
      {
        name: 'Seungkwan',
        fullname: 'Boo Seungkwan',
        Position: 'Main Vocalist',
        imageUrl:
          'https://i.pinimg.com/236x/f5/f9/52/f5f952e8c1fae4ab83253b8209692fdd.jpg',
        Birthday: 'January 16th 1998',
        info:
          'Seungkwan, born Boo Seungkwan, is the main vocalist of Seventeen known for his powerful and soulful voice. He is also known for his bright and cheerful personality, making him a fan favorite.',
      },
      {
        name: 'Vernon',
        fullname: 'Hansol Vernon Chwe',
        Position: 'Main Rapper, Sub Vocalist',
        imageUrl:
          'https://i.pinimg.com/236x/60/6c/ef/606ceff4bdcb939a9844070f4485c1d7.jpg',
        Birthday: 'February 11th, 1999',
        info:
          'Vernon, born Hansol Vernon Chwe, is a Korean-American member known for his unique rap style. He is often praised for his ability to seamlessly switch between Korean and English.',
      },
      {
        name: 'Dino',
        fullname: 'Lee Chan',
        Position: 'Main Dancer, Sub Vocalist, Maknae (Youngest Member)',
        imageUrl:
          'https://i.pinimg.com/236x/ba/f4/a2/baf4a2b5efc2fe384ff37601dcc75e65.jpg',
        Birthday: 'February 11th 1999',
        info:
          'Dino, born Lee Chan, is the youngest member of Seventeen and is known for his powerful dancing skills. He has shown impressive growth as a vocalist and is often recognized for his stage presence.',
      },
      
  ];

  return (
    <SeventeenPageContainer>
      <Header />
      <Title>Seventeen</Title>
      <History>
      Seventeen is a South Korean boy band formed by Pledis Entertainment. The group made their official debut on May 26, 2015, and quickly gained recognition for their exceptional talent and unique approach to K-pop. What set Seventeen apart was their innovative self-producing model, where the members actively contributed to songwriting, choreography, and overall creative direction of their music. This hands-on approach allowed them to craft a distinctive sound and style.

From the outset, Seventeen garnered attention for their impressive performance unit, which emphasized powerful and synchronized dance routines. They were further divided into vocal, hip-hop, and performance subunits, showcasing their members' diverse skills and strengths. This multifaceted approach not only enriched their music but also provided fans with a variety of performances to enjoy.

Seventeen's debut extended play (EP), titled "17 Carat," marked the beginning of their successful journey. The album showcased a blend of genres, demonstrating their versatility as artists. Over the years, Seventeen continued to release chart-topping albums and singles, solidifying their position in the K-pop industry.

Their music resonated not only with Korean audiences but also on an international scale, leading to a dedicated global fan base known as "Carats." The group's ability to connect with fans through their sincerity, relatable lyrics, and engaging performances further endeared them to a wide audience.

Beyond their musical achievements, Seventeen ventured into various aspects of entertainment, including variety shows and reality programs, which allowed fans to get a closer look at their personalities and dynamics as a group. Their hard work and dedication earned them numerous awards and accolades, and they became known for their strong work ethic and genuine camaraderie.

As they continued to evolve and mature as artists, Seventeen consistently delivered high-quality music and captivating performances, solidifying their status as one of the leading groups in the K-pop industry. Their journey is a testament to their unwavering passion for music and their commitment to bringing fresh and innovative content to their fans worldwide.
      </History>
      <MembersHeading>Members</MembersHeading>
      <MembersContainer>
        {members.map((member, index) => (
          <MemberDetail
            key={index}
            name={member.name}
            fullname={member.fullname}
            position={member.Position}
            imageUrl={member.imageUrl}
            Birthday={member.Birthday}
            info={member.info}
          />
        ))}
      </MembersContainer>
      <SongsHeading>Songs</SongsHeading>
      <AlbumsContainer>
        {songs.map((album, index) => (
          <Album key={index}>
            <AlbumImage src={album.imageUrl} alt={`Album ${index + 1}`} />
            <AlbumTitle>{album.album}</AlbumTitle>
            <SongList>
              {album.songs.map((song, idx) => (
                <Song key={idx}>{song}</Song>
              ))}
            </SongList>
          </Album>
        ))}
      </AlbumsContainer>
      <SeventeenGallery href="#gallery">Gallery</SeventeenGallery>
    </SeventeenPageContainer>
  );
};

export default SeventeenPage;
