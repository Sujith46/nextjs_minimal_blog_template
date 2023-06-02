"use client";

import { styled } from "styled-components";

import Twitter from "../../assets/icons/social/twitter.svg";
import Mail from "../../assets/icons/social/mail.svg";
import Instagram from "../../assets/icons/social/instagram.svg";

import SocialCards from "@/components/socialCards/SocialCards";
import { device } from "@/lib/device";

const SocialConnect = () => {
  const links = [
    {
      name: "Connect on twitter",
      url: "https://twitter.com/reachsujith",
      icon: Twitter,
    },
    {
      name: "Connect on Instagram",
      url: "https://twitter.com/reachsujith",
      icon: Instagram,
    },
    {
      name: "Subscribe to my newsletter",
      url: "",
      icon: Mail,
    },
  ];
  return (
    <Container>
      {links.map((item, index) => (
        <SocialCards
          key={index}
          name={item.name}
          url={item.url}
          socialIcon={item.icon}
        />
      ))}
    </Container>
  );
};

export default SocialConnect;

const Container = styled.div`
  padding: 16px 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;
