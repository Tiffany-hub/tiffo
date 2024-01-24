import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Slide = styled.div`
  img {
  border-radius: 10px;
  width: 255px; /* Make images fill their containers */
  height: 400px; /* Maintain aspect ratio */
  margin: 0 20px; /* Add space between images */
}
`;

function BandSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide>
          <img src="https://i.pinimg.com/236x/ae/5f/a0/ae5fa07e96f67955a065060d5cbaa131.jpg" alt="Blackpink" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/c1/8a/33/c18a33ad004ac52be290ae0963a3c6a1.jpg" alt="NewJeans" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/40/92/64/4092649ca1234b8f914be5339e44a6b9.jpg" alt="MonstaX" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/8b/52/9a/8b529aab7799776555bb3674cf3945be.jpg" alt="ATEEZ" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/e5/4e/03/e54e0333b58fa93086c6e8a6796c8735.jpg" alt="BTS" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/4f/ab/7d/4fab7d77a71ae347c1a4719852cb0a59.jpg" alt="Lisa" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/e4/a4/7d/e4a47dc1f909bb9c88bb1a3c7a95fe1e.jpg" alt="IU" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/6f/f3/6d/6ff36d9ea9e3d43fea1b69aeec6cf12c.jpg" alt="SVT" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/fe/6e/6b/fe6e6bdc1785715d5e168e620251cdec.jpg" alt="Hyunjin" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/f2/2e/8f/f22e8ffc9ffcbd614d42408165c3da8b.jpg" alt="Jennie" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/736x/cd/6c/c9/cd6cc9661c5acbd1f4d5f3c83767af85.jpg" alt="Song" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/61/7a/7d/617a7d112b5a0465f1ce7f57576eb78b.jpg" alt="fromis9" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/d2/4e/4c/d24e4c2e4880ef531ea05cb4e88c91ac.jpg" alt="im" />
        </Slide>
        <Slide>
          <img src="https://i.pinimg.com/236x/69/6a/1f/696a1fa28ab68297427e86a1518eea51.jpg" alt="Yeji" />
        </Slide>
      </Slider>
    </SliderContainer>
  );
}

export default BandSlider;
