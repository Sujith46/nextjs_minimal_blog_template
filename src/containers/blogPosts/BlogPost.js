"use client";

import Card from "@/components/card/Card";
import { BlogPostGrid } from "./BlogPost.styled";

const BlogPost = () => {
  const blogArray = [
    {
      title: "The Art of Storytelling",
      subTitle: "Unleashing the Power of Narrative",
      date: "2023-05-15",
      authorName: "John Smith",
      tag: "Writing",
    },
    {
      title: "Exploring the Wonders of Space",
      subTitle: "Journey to the Unknown",
      date: "2023-04-02",
      authorName: "Jane Doe",
      tag: "Science",
    },
    {
      title: "Mastering the Art of Cooking",
      subTitle: "Recipes and Techniques from the Experts",
      date: "2023-03-10",
      authorName: "Emily Wilson",
      tag: "Food",
    },
    {
      title: "Discovering Ancient Civilizations",
      subTitle: "Unearthing the Secrets of the Past",
      date: "2023-02-19",
      authorName: "David Thompson",
      tag: "History",
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
    <BlogPostGrid>
      {blogArray?.map((item, index) => (
        <Card
          title={item.title}
          subTitle={item.subTitle}
          author={item.authorName}
          publishedDate={item.date}
        />
      ))}
    </BlogPostGrid>
  );
};

export default BlogPost;
