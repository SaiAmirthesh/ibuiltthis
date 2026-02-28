import Header from "@/components/landingPage/Header";
import IbuiltthisScroll from "@/components/landingPage/IbuiltthisScroll";
import Features from "@/components/landingPage/Features";
import HowItWorks from "@/components/landingPage/HowItWorks";
import Contact from "@/components/landingPage/Contact";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }
  return (
    <main className="w-full bg-[#050505] text-white">
      <Header />
      <IbuiltthisScroll />
      <Features />
      <HowItWorks />
      <Contact />
    </main>
  );
}
