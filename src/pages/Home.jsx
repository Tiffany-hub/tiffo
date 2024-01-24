import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import BandSlider from '../components/Slider';
import CategorySelection from '../components/Category';

const HomePageContainer = styled.div`
  background-color: #f0f0f0;
  font-family: 'Times New Roman', serif;
  color: #000;
  text-align: center;
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
`;

const Title = styled.h2`
  font-style: italic;
  font-weight: bold;
  color: #ae6ee3;
  font-size: 32px;
`;

const Content = styled.p`
  font-size: 18px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 20px;
  text-align: left;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;


const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Title>History of Kpop</Title>
      <Content>
        The history of K-pop, short for Korean pop music, is a dynamic and multifaceted journey that spans several decades. Here's a brief summary:
      </Content>
      <List>
        <ListItem>
          <Strong>Early Influences (1950s-1980s):</Strong> K-pop's roots can be traced back to the 1950s when Western music styles, such as jazz and rock, began to influence South Korea. The 1960s and 1970s saw the emergence of Korean pop idols and bands, but it wasn't until the 1980s that K-pop started to take a more modern form.
        </ListItem>
        <ListItem>
          <Strong>The Birth of Modern K-pop (1990s):</Strong> The 1990s marked the formalization of K-pop as a distinct genre. Seo Taiji and Boys, a pioneering group, blended hip-hop and pop, paving the way for a new generation of artists. The boy band H.O.T and girl group S.E.S gained massive popularity, solidifying K-pop's place in South Korean culture.
        </ListItem>
        <ListItem>
          <Strong>Hallyu Wave (2000s):</Strong> The early 2000s saw the rise of K-pop internationally, thanks in part to the "Hallyu" or Korean Wave. Artists like BoA and TVXQ achieved success in Asia, and the emergence of groups like BIGBANG and Girls' Generation expanded K-pop's global reach.
        </ListItem>
        <ListItem>
          <Strong>Social Media and Globalization (2010s):</Strong> The 2010s were a watershed moment for K-pop's global expansion. Groups like BTS and BLACKPINK gained worldwide recognition and achieved chart-topping success. Social media platforms like YouTube and Twitter played a significant role in K-pop's global spread, enabling fans from all over the world to connect with their favorite artists.
        </ListItem>
        <ListItem>
          <Strong>Diversity and Subgenres (2010s-2020s):</Strong> K-pop evolved to incorporate a wide range of musical styles, from hip-hop and R&B to EDM and rock. This diversity attracted a more diverse fan base and made K-pop a global cultural phenomenon. Additionally, K-pop began to address important social and cultural issues through music and activism.
        </ListItem>
        <ListItem>
          <Strong>Global Collaborations and Crossover Success (2020s):</Strong> In the 2020s, K-pop continued to break barriers with collaborations between Korean and international artists. BTS, for example, collaborated with Western artists like Halsey and Coldplay. The global impact of K-pop on fashion, entertainment, and culture continued to grow.
        </ListItem>
      </List>
      <BandSlider/>
      <CategorySelection/>
    </HomePageContainer>
  );
};

export default HomePage;
