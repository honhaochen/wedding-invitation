import Container from "@/app/_components/container";

export default function InviteeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container>
        {children}
      </Container>
    </main>
  );
}
