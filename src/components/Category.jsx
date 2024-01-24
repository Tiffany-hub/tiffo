import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryHeading = styled.h2`
  font-size: 24px;
  color: #ae6ee3;
  margin-top: 30px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CategoryWrapper = styled.div`
  position: relative;
`;

const CategoryImage = styled.img`
  width: 270px;
  height: 350px;
  cursor: pointer;
`;

const CategoryTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: 	#343434;
  padding: 10px;
  margin: 0;
`;

const CategorySelection = () => {
  return (
    <>
      <CategoryHeading>Choose a Category</CategoryHeading>
      <CategoryContainer>
        <CategoryWrapper>
          <Link to="/girlbands">
            <CategoryImage src="https://i.pinimg.com/236x/9d/a2/13/9da2134eba0c94578e39f4c6d8500010.jpg" alt="Girl Bands" />
            <CategoryTitle>Girl Bands</CategoryTitle>
          </Link>
        </CategoryWrapper>
        <CategoryWrapper>
          <Link to="/boybands">
            <CategoryImage src="https://i.pinimg.com/236x/41/4e/bb/414ebb60bbc6d1ae6b4c7719646c499c.jpg" alt="Boy Bands" />
            <CategoryTitle>Boy Bands</CategoryTitle>
          </Link>
        </CategoryWrapper>
        <CategoryWrapper>
          <Link to="/soloartists">
            <CategoryImage src="https://i.pinimg.com/236x/76/b6/36/76b636eefcbc9de1dd2b39b1f84630cf.jpg" alt="Solo Artists" />
            <CategoryTitle>Solo Artists</CategoryTitle>
          </Link>
        </CategoryWrapper>
      </CategoryContainer>
    </>
  );
};

export default CategorySelection;
