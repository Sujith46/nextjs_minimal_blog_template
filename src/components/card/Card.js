import Image from "next/image";
import { styled } from "styled-components";

import DefaultImg from "../../assets/images/blog/default.jpg";

const Card = ({ imgURL, title, subTitle, tag, author, publishedDate }) => {
  const defaultImgRequired = imgURL ? imgURL : DefaultImg;

  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={defaultImgRequired} alt="blog-post-img" />
      </CardImageContainer>
      <CardContent>
        <CardTag>{tag}</CardTag>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subTitle}</CardSubTitle>
        <CardAuthorInfo>
          <CardAuthorName>{author}</CardAuthorName>
          <CardPublishedDate>{publishedDate}</CardPublishedDate>
        </CardAuthorInfo>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  padding: 16px;
  border-radius: 24px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    -webkit-box-shadow: 0px 5px 50px -20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 5px 50px -20px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 5px 50px -20px rgba(0, 0, 0, 0.4);
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
`;

export const CardAuthorInfo = styled.div``;

export const CardAuthorName = styled.div`
  font-size: 14px;
  color: #0c134f;
`;

export const CardPublishedDate = styled.div`
  font-size: 12px;
`;

export const CardImageContainer = styled.div`
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 24px;
  }
  width: 100%;
  margin-bottom: 24px;
`;
