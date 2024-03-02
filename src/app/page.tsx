"use client";
import Hero from "@/components/Hero";
import { Feature } from "@/components/Feature";
import Testimonials from "@/components/Testimonials";
import Layout from "@/components/Layout/index";
export default function Home() {
  return (
    <main className="  ">
      <Layout>
        <Hero />
        <Feature />
        <Testimonials />
      </Layout>
    </main>
  );
}
