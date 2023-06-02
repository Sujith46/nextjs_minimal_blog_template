"use client";

import Card from "@/components/card/Card";
import { BlogPostGrid } from "./BlogPost.styled";

import HappyChild from "../../assets/images/blog/happy-child.jpg";
import ColorFull from "../../assets/images/blog/colourfull.jpg";
import Court from "../../assets/images/blog/supreme-court.jpg";
import Stretch from "../../assets/images/blog/stretch.jpg";
import { motion } from "framer-motion";

const BlogPost = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childStyle = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const blogArray = [
    {
      title: "The Art of Storytelling",
      subTitle: "Unleashing the Power of Narrative",
      date: "2023-05-15",
      authorName: "John Smith",
      tag: "Writing",
      img: HappyChild,
    },
    {
      title: "Exploring the Wonders of Space",
      subTitle: "Journey to the Unknown",
      date: "2023-04-02",
      authorName: "Jane Doe",
      tag: "Science",
      img: ColorFull,
    },
    {
      title: "Mastering the Art of Cooking",
      subTitle: "Recipes and Techniques from the Experts",
      date: "2023-03-10",
      authorName: "Emily Wilson",
      tag: "Food",
      img: Court,
    },
    {
      title: "Discovering Ancient Civilizations",
      subTitle: "Unearthing the Secrets of the Past",
      date: "2023-02-19",
      authorName: "David Thompson",
      tag: "History",
      img: Stretch,
    },
    {
      title: "The Future of Technology",
      subTitle: "Emerging Trends and Innovations",
      date: "2023-01-05",
      authorName: "Michael Johnson",
      tag: "Technology",
    },
  ];

  return (
    <BlogPostGrid
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {blogArray?.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          author={item.authorName}
          publishedDate={item.date}
          imgURL={item.img}
          variants={childStyle}
        />
      ))}
    </BlogPostGrid>
  );
};

export default BlogPost;
