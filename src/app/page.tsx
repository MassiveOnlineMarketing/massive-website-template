import Footer from "@/components/partials/footer";
import Navbar from "@/components/partials/navbar";
import { SubHeading } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <main className="h-[2000px]">

    <Navbar />

    test
    <Button mbFull variant="link" size="sm">hoi</Button>
    <SubHeading level="h3" size="xl" colorScheme="accent">hoi</SubHeading>

    <Footer />
   </main>
  );
}
