import Container from "@/app/_components/container";
import DateView from "@/app/_components/date";
import Story from "@/app/_components/story";
import Registration from "@/app/_components/registration";
import CoverImage from "@/app/_components/cover-image";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/_components/location"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <Container>
        <CoverImage />
        <Story />
        <DateView />
        <Map />
        <Registration />
      </Container>
    </main>
  );
}
