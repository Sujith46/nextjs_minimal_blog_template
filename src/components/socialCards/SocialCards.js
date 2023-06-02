"use client";

import Image from "next/image";
import { styled } from "styled-components";

const SocialCards = ({ socialIcon, url, name }) => {
  return (
    <Container href={url} target="_blank">
      <SocialIconContainer>
        <Image src={socialIcon} alt="social-icon" />
      </SocialIconContainer>
      <SocialTitle>{name}</SocialTitle>
    </Container>
  );
};

export default SocialCards;

const Container = styled.a`
  padding: 16px;
  background-color: #d4adfc;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
`;

const SocialTitle = styled.h3`
    font-size: 16px;
    line-height: 24px;
`;

const SocialIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #bc91e9;
    border-radius: 6px;
`;
