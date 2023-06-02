"use client";

import { motion } from "framer-motion";

import { device } from "@/lib/device";
import { styled } from "styled-components";

const HeroContent = () => {
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Container
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Title as={motion.h1} variants={item}>
        Insights & Inspiration: Exploring the World Through Words
      </Title>
      <SubTitle as={motion.h2} variants={item}>
        Discover a Collection of Captivating Stories, Informative Articles, and
        Thought-Provoking Ideas
      </SubTitle>
    </Container>
  );
};

export default HeroContent;

const Container = styled.div`
  padding: 32px;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  line-height: 54px;
  color: #0c134f;
  letter-spacing: -2px;
  font-weight: 800;
  margin-bottom: 16px;
  max-width: 800px;

  @media ${device.mobile} {
    max-width: none;
    font-size: 32px;
    line-height: 40px;
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  font-weight: 400;
  color: #8387ab;
`;
