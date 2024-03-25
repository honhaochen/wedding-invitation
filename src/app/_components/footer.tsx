import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center mb-4">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold font-display tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2">
            Created with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/honhaochen/wedding-invitation`}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-off-white-dark font-bold font-body py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
