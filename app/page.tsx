import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FlagshipServices } from "@/components/flagship-services"
import { SecondaryServices } from "@/components/secondary-services"
import { ProductionTrust } from "@/components/production-trust"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <Hero />
      <FlagshipServices />
      <SecondaryServices />
      <ProductionTrust />
      <SiteFooter />
    </main>
  )
}
