import Image from "next/image";

import { styled } from "styled-components";

import Avatar from "../../assets/images/avatar.png";
import Link from "next/link";
import { PrimaryButton } from "../button/Button";

const Header = () => {
  return (
    <Navbar>
      <AvatarContainer>
        <Image src={Avatar} alt="logo" width={30} />
      </AvatarContainer>
      <MenuItemContainer>
        <MenuItem href={"/"}>Home</MenuItem>
        <MenuItem href={"/"}>About</MenuItem>
      </MenuItemContainer>
      {/* <PrimaryButton>📞 Contact Us</PrimaryButton> */}
    </Navbar>
  );
};

export default Header;

export const AvatarContainer = styled.div`
  background-color: #0c134f;
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 50px;
  display: grid;
  place-content: center;
`;
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
`;
export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MenuItem = styled(Link)`
  color: #0c134f;
  font-size: 14px;
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.3s ease;
  border-radius: 24px;

  &:hover {
    background-color: #0c134f;
    color: white;
  }
`;
