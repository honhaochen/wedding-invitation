import Container from "@/app/_components/container";
import Footer from "@/app/_components/footer";

export default function InviteeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container>{children}</Container>
      <Footer />
    </main>
  );
}
