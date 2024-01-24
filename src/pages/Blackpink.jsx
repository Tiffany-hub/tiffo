import React from 'react';
import styled from 'styled-components';
import MemberDetail from './Member';
import Header from '../components/Header';
import songs from './Blackpinksongs';
import BlackpinkGallery from './Blackpinkgallery';

const BlackpinkPageContainer = styled.div`
  background-color: #ff69b4; /* Black */
  color: #fff; /* White */
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 0px;
  color: black; 
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
  display: flex;
  justify-content: space-around;
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

const BlackpinkPage = () => {
  const members = [
    {
      name: 'Jisoo',
      fullname: 'Kim Ji-soo',
      imageUrl:
        'https://i.pinimg.com/236x/4c/b5/69/4cb569bb529653a1b5bbcfa3027a04cc.jpg',
      Birthday: '3rd January 1995',
      info:
        'Jisoo is the oldest member of Blackpink. She is known for her powerful and versatile vocals. She is also recognized for her stunning visuals and charismatic stage presence. Before joining BLACKPINK, she trained under YG Entertainment for several years. Jisoo has been involved in various endorsements and has also made appearances in Korean dramas (Snowdrop).',
    },
    {
      name: 'Jennie',
      fullname: 'Jennie Kim',
      imageUrl:
        'https://i.pinimg.com/236x/73/18/74/731874384b4de71631c2e76610c182b7.jpg',
      Birthday: 'January 16th 1996',
      info:
        'Jennie is known for her rap skills and unique vocal tone. She is often considered one of the fashion icons in the group. Jennie is known for her confident and commanding stage presence. Before joining BLACKPINK, she lived in New Zealand for a few years, which contributed to her proficiency in English.',
    },
    {
      name: 'Rose',
      fullname: 'Park Chae-young',
      imageUrl:
        'https://i.pinimg.com/236x/31/64/51/31645116d127a1c4f3b823db77b64b7c.jpg',
      Birthday: 'February 11th 1997',
      info:
        'Rosé is known for her powerful and emotionally resonant vocals. She is also an accomplished guitarist. Rosé spent her childhood in Australia, which is why she is fluent in English. She was discovered through an audition in Australia and subsequently joined YG Entertainment. Her unique background adds an international flair to the group.',
    },
    {
      name: 'Lisa',
      fullname: 'Lalisa Monoban',
      imageUrl:
        'https://i.pinimg.com/236x/e7/06/60/e706603e5e815a36169db1db8a90cace.jpg',
      Birthday: 'March 27th 1997',
      info:
        'Lisa is known for her exceptional dance skills and rap abilities. She is also fluent in multiple languages, including Thai, Korean, and English. Lisa is inclusion in the group reflects BLACKPINK global appeal. She was scouted by YG Entertainment in Thailand and is the first non-Korean artist to debut under the agency.',
    },
  ];

  return (
    <BlackpinkPageContainer>
      <Header />
      <Title>Blackpink</Title>
      <History>
        BLACKPINK is a South Korean girl group formed by YG Entertainment in
        2016. It consists of four members: Jisoo, Jennie, Rosé, and Lisa. They
        quickly gained international recognition for their unique blend of K-pop,
        hip-hop, and EDM, along with their powerful performances and stylish
        visuals. The group made their debut with the single album "Square One,"
        which included the hit songs "Boombayah" and "Whistle." Since then, they
        have released several successful albums and singles, becoming one of the
        most prominent acts in the global music industry. BLACKPINK's music
        videos on platforms like YouTube have amassed billions of views, breaking
        numerous records. They've also collaborated with international artists
        and have gained a substantial fan base known as "Blinks." Their impact
        extends beyond music, as members have ventured into solo activities in
        areas like fashion, acting, and endorsements. With their dynamic
        presence, captivating performances, and diverse talents, BLACKPINK
        continues to be a significant force in the global entertainment landscape.
      </History>
      <MembersHeading>Members</MembersHeading>
      <MembersContainer>
        {members.map((member, index) => (
          <MemberDetail
            key={index}
            name={member.name}
            fullname={member.fullname}
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
      <BlackpinkGallery href="#gallery">Gallery</BlackpinkGallery>
    </BlackpinkPageContainer>
  );
};

export default BlackpinkPage;
