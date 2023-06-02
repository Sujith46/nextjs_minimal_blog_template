import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

import DefaultImg from "../../assets/images/blog/default.jpg";
import DefaultAuthorImg from "../../assets/images/avatars/author-default.jpg";
import { device } from "@/lib/device";
import { motion } from "framer-motion";

const Card = ({
  imgURL,
  title,
  subTitle,
  tag,
  author,
  publishedDate,
  authorImg,
  variants,
}) => {
  const defaultImgRequired = imgURL ? imgURL : DefaultImg;
  const authorDefaultImg = authorImg ? authorImg : DefaultAuthorImg;

  return (
    <CardContainer as={motion.a} href={"/"} variants={variants}>
      <CardImageContainer>
        <Image src={defaultImgRequired} alt="blog-post-img" />
      </CardImageContainer>
      <CardContent>
        <CardTag>{tag}</CardTag>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subTitle}</CardSubTitle>
        <CardAuthorInfo>
          <AuthorImage>
            <Image src={DefaultAuthorImg} alt="author-avatar" />
          </AuthorImage>
          <ContentWrapper>
            <CardAuthorName>{author}</CardAuthorName>
            <CardPublishedDate>{publishedDate}</CardPublishedDate>
          </ContentWrapper>
        </CardAuthorInfo>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled(Link)`
  padding: 16px;
  border-radius: 24px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    -webkit-box-shadow: 0px 2px 70px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 2px 70px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 70px 0px rgba(0, 0, 0, 0.18);
  }

  @media ${device.mobile} {
    padding: 0;
  }
`;

const CardContent = styled.div`
  padding: 8px 4px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  color: #0c134f;
  letter-spacing: -1px;
  margin-bottom: 12px;
`;

export const CardTag = styled.div`
  color: #1d267d;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 22px;
`;

export const CardSubTitle = styled.p`
  color: #0c134f;
  font-size: 14px;
  line-height: 22px;
  color: #8387ab;
  margin-bottom: 24px;
`;

export const CardAuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardAuthorName = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: -0.6px;
  color: #0c134f;
`;

export const CardPublishedDate = styled.div`
  font-size: 12px;
  line-height: 18px;
`;

export const CardImageContainer = styled.div`
  img {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: 200px !important;
    border-radius: 24px;
  }
  width: 100%;
  margin-bottom: 10px;
`;

const AuthorImage = styled.div`
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 24px;
  }
  width: 35px;
`;
const ContentWrapper = styled.div``;
