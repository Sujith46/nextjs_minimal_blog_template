import { styled } from "styled-components";
import { PrimaryButton } from "../button/Button";
import { device } from "@/lib/device";

const Footer = () => {
  return (
    <Container>
      <FooterContentContainer>
        <Header>Stay in the Loop: Subscribe to Our Newsletter</Header>
        <SubHeader>
          Get the Latest Updates, Exclusive Content, and Special Offers
          Delivered Right to Your Inbox
        </SubHeader>
      </FooterContentContainer>
      <InputContainer>
        <TextInput type="email" placeholder="Your e-mail address"></TextInput>
        <PrimaryButton>Subscribe</PrimaryButton>
      </InputContainer>
      <Circle />
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin: 16px 32px 40px 32px;
  padding: 54px 42px;
  background-color: #5c469c;
  color: white;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  @media ${device.mobile} {
    padding: 20px;
    margin: 16px;
  }
`;

const FooterContentContainer = styled.div`
  margin-bottom: 24px;
`;

const Header = styled.h2`
  font-size: 26px;
  line-height: 38px;
  letter-spacing: -0.8px;
  margin-bottom: 16px;
  max-width: 400px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 28px;
  }
`;

const SubHeader = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #f5f5f57a;
  max-width: 400px;
`;

const InputContainer = styled.div`
  padding: 12px;
  background-color: white;
  border-radius: 12px;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  z-index: 10;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  width: 100%;

  &&::placeholder {
    opacity: 0.6;
  }
`;

const Circle = styled.div`
  clip-path: circle(50% at 50% 50%);
  background-color: #d4adfc;
  width: 300px;
  height: 300px;
  position: absolute;
  right: -26px;
  top: 160px;

  @media ${device.mobile} {
    width: 150px;
    height: 150px;
    right: -42px;
    top: 240px;
  }
`;
