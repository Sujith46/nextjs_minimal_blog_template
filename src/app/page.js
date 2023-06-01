import HeroContent from "@/components/heroContent/HeroContent";
import Layout from "@/components/layout/Layout";
import BlogPost from "@/containers/blogPosts/BlogPost";

export default function Home() {
  
  return (
    <main>
      <Layout>
        <HeroContent />
        <BlogPost/>
      </Layout>
    </main>
  )
}
