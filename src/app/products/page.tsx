import type { Metadata } from "next";

import { ProductCard } from "@/components/site/product-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore irsSMEX software products including VibeSafe.",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen pb-36 pt-40 sm:pt-44 lg:pb-44">
      <div className="premium-shell">
        <Reveal as="section">
          <SectionHeading
            title="AI Software for Modern Builders"
            description="VibeSafe is the active irsSMEX product. AI Business Agents is in development. AI UGC Ad Studio is an experimental concept and is not currently available for purchase."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.name} {...product} delay={index * 100} />
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
