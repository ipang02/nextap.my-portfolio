import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-4/page";

export const metadata: Metadata = {
  title: "Nextap - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
