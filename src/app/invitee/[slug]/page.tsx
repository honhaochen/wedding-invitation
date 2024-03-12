import Container from "../../_components/container";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  return (
    <main>
      <Container>Hi, {params.slug}</Container>
    </main>
  );
}
