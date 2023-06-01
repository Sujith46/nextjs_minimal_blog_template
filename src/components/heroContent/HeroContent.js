"use client"

import { styled } from "styled-components";

const HeroContent = () => {
  return (
    <Container>
      <Title>Insights & Inspiration: Exploring the World Through Words</Title>
      <SubTitle>
        Discover a Collection of Captivating Stories, Informative Articles, and
        Thought-Provoking Ideas
      </SubTitle>
    </Container>
  );
};

export default HeroContent;

const Container = styled.div`
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 42px;
  line-height: 54px;
  color: #0c134f;
  letter-spacing: -2px;
  font-weight: 800;
  margin-bottom: 16px;
  max-width: 800px;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  font-weight: 400;
  color: #8387ab;
`;
