"use client";
import Image from "next/image";

import { styled } from "styled-components";

import Avatar from "../../assets/images/avatars/author-default.jpg";

const AboutMe = () => {
  return (
    <Container>
      <AboutInfoWrapper>
        <AboutContent>
          <GreetingText>hello,</GreetingText>
          <Heading>
            Full Stack Frontend Engineer and Design System Expert
          </Heading>
          <SubHeding>
            Sujith is a highly skilled full stack frontend engineer with
            expertise in building design systems and scaling products. With a
            passion for creating exceptional user experiences, Sujith helps
            organizations optimize their digital products and streamline
            development processes. With a solid background in frontend
            development, Sujith brings a holistic approach to design and
            engineering, ensuring seamless integration and maximum efficiency.
            With Sujith's expertise, your team can unlock the full potential of
            your product and deliver outstanding user experiences.
          </SubHeding>
        </AboutContent>
        <AboutImageContainer>
          <Image src={Avatar} alt="about-me" width={400} />
        </AboutImageContainer>
      </AboutInfoWrapper>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  padding: 16px 32px;
  margin-bottom: 64px;
`;

const AboutInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AboutContent = styled.div``;

const AboutImageContainer = styled.div`
    img {
        border-radius: 20px;
    }
`;

const GreetingText = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
`;

const Heading = styled.h1`
  font-size: 42px;
  line-height: 54px;
  color: #0c134f;
  letter-spacing: -2px;
  font-weight: 800;
  margin-bottom: 16px;
  max-width: 800px;
`;

const SubHeding = styled.h2`
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.6px;
  font-weight: 400;
  color: #8387ab;
  max-width: 800px;
`;
