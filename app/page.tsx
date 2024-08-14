import {
  Topbar,
  Navbar,
  Hero,
  About,
  Shop,
  Connect,
  GiftCard,
  Policies,
  Footer,
  BackToTop,
} from "./components";

export default async function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Shop />
        <Connect />
        <GiftCard />
        <Policies />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
