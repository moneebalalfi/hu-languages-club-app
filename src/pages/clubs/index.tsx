import ClubsList from "@/components/ClubsList";
import Head from "next/head";

function ChooseClub() {
  return (
    <>
      <Head>
        <title>Clubs</title>
      </Head>

      <ClubsList />
    </>
  );
}

export default ChooseClub;
