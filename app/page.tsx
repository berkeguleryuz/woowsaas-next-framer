import FeaturesCards from "@/components/FeaturesCards";
import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import Nav from "@/components/Nav";

export default function Home() {
  
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturesCards />
      <FeaturesGrid />
      <LatestPosts />
    </main>
  );
}
