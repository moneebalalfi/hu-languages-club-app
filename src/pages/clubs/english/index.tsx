import ClubLayout from "@/components/Layout/ClubLayout";
import PostsSection from "@/components/PostsSection";
import RoomsSection from "@/components/RoomsSection";
import Head from "next/head";

function ClubPage() {
  return (
    <>
      <Head>
        <title>English Club</title>
      </Head>
      <ClubLayout>
        <PostsSection />
        <RoomsSection />
      </ClubLayout>
    </>
  );
}

export default ClubPage;
