import FadeInUp from "@/components/animations/FadeInUp";
import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { Card3D } from "@/components/ui/card3d";
import GradientBackground from "@/components/ui/gradient-background";
import { PremiumButton } from "@/components/ui/premium-button";
import { RichHeading } from "@/components/ui/rich-heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PalacePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[50vh] relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-16">
        <GradientBackground
          variant="yellow-peach"
          intensity="medium"
          blur="xl"
          pattern="dots"
          className="absolute inset-0 z-0"
        />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <ParallaxSection speed={0.5} opacity={true}>
            <RichHeading
              tag="h1"
              type="gradient"
              accent="primary"
              className="text-5xl md:text-7xl mb-6"
            >
              What's New
            </RichHeading>
          </ParallaxSection>

          <FadeInUp delay={0.3}>
            <p className="text-lg md:text-xl text-mymind-dark/80 mb-12 max-w-2xl">
              The latest features, improvements and thoughts from the mymind team.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-20 px-6 md:px-10 bg-white">
        <div className="container mx-auto max-w-5xl">
          <StaggerContainer
            delay={0.2}
            staggerChildren={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Blog Post 1 */}
            <StaggerItem>
              <Card3D
                intensity={5}
                hoverScale={1.03}
                className="h-full flex flex-col overflow-hidden rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2241512483/780393319.jpeg"
                    alt="NEW: Bluesky support"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-mymind-orange text-white text-xs px-2 py-1 rounded-full">
                    New Features
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-louize mb-4">NEW: Bluesky support</h3>
                  <p className="text-mymind-dark/70 mb-4 line-clamp-3 flex-1">
                    We've added support for Bluesky, the decentralized social network. Now you can save posts,
                    profiles, and threads from Bluesky directly to your mind.
                  </p>
                  <PremiumButton
                    href="/new-bluesky-support"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    iconPosition="right"
                  >
                    Read more
                  </PremiumButton>
                </div>
              </Card3D>
            </StaggerItem>

            {/* Blog Post 2 */}
            <StaggerItem>
              <Card3D
                intensity={5}
                hoverScale={1.03}
                className="h-full flex flex-col overflow-hidden rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2408622771/3030419451.jpeg"
                    alt="One private place for your important screenshots"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-mymind-blue text-white text-xs px-2 py-1 rounded-full">
                    Thoughts
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-louize mb-4">One private place for your important screenshots</h3>
                  <p className="text-mymind-dark/70 mb-4 line-clamp-3 flex-1">
                    Screenshots have become an essential part of our digital lives. They capture important moments,
                    save key information, and help us remember things we might otherwise forget.
                  </p>
                  <PremiumButton
                    href="/one-private-place-for-your-important-screenshots"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    iconPosition="right"
                  >
                    Read more
                  </PremiumButton>
                </div>
              </Card3D>
            </StaggerItem>

            {/* Blog Post 3 */}
            <StaggerItem>
              <Card3D
                intensity={5}
                hoverScale={1.03}
                className="h-full flex flex-col overflow-hidden rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3614327839/590431315.jpeg"
                    alt="On landscapes, believing & programming your mind"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-mymind-blue text-white text-xs px-2 py-1 rounded-full">
                    Thoughts
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-louize mb-4">On landscapes, believing & programming your mind</h3>
                  <p className="text-mymind-dark/70 mb-4 line-clamp-3 flex-1">
                    Exploring the interconnection between our physical and mental landscapes, and how our beliefs
                    shape the way we program our minds to interact with the world.
                  </p>
                  <PremiumButton
                    href="/on-landscapes-believing-programming-your-mind"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    iconPosition="right"
                  >
                    Read more
                  </PremiumButton>
                </div>
              </Card3D>
            </StaggerItem>

            {/* Blog Post 4 */}
            <StaggerItem>
              <Card3D
                intensity={5}
                hoverScale={1.03}
                className="h-full flex flex-col overflow-hidden rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/4055205238/981608142.jpeg"
                    alt="Our Manifesto"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-mymind-purple text-white text-xs px-2 py-1 rounded-full">
                    Philosophy
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-louize mb-4">Our Manifesto</h3>
                  <p className="text-mymind-dark/70 mb-4 line-clamp-3 flex-1">
                    In a time when every company has a bid on our data, when we exchange our privacy
                    for information, when every move we make is influenced by how others will perceive
                    it, we have little space to call our own.
                  </p>
                  <PremiumButton
                    href="/manifesto"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    iconPosition="right"
                  >
                    Read more
                  </PremiumButton>
                </div>
              </Card3D>
            </StaggerItem>

            {/* Blog Post 5 */}
            <StaggerItem>
              <Card3D
                intensity={5}
                hoverScale={1.03}
                className="h-full flex flex-col overflow-hidden rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/342838306/1953882938.jpeg"
                    alt="Why people love mymind"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-mymind-yellow text-white text-xs px-2 py-1 rounded-full">
                    Reviews
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-louize mb-4">Why people love mymind</h3>
                  <p className="text-mymind-dark/70 mb-4 line-clamp-3 flex-1">
                    Discover why designers, writers, developers, and thinkers of all kinds have fallen
                    in love with mymind as their personal extension for capturing and recalling ideas.
                  </p>
                  <PremiumButton
                    href="/reviews"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    iconPosition="right"
                  >
                    Read more
                  </PremiumButton>
                </div>
              </Card3D>
            </StaggerItem>

            {/* Blog Post 6 */}
            <StaggerItem>
              <Card3D
                intensity={5}
                hoverScale={1.03}
                className="h-full flex flex-col overflow-hidden rounded-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/3565924215/3064040072.jpeg"
                    alt="For Marketers"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-mymind-dark text-white text-xs px-2 py-1 rounded-full">
                    Use Cases
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-louize mb-4">How Marketers Use mymind</h3>
                  <p className="text-mymind-dark/70 mb-4 line-clamp-3 flex-1">
                    Marketing professionals use mymind to collect inspiration, save campaign ideas,
                    organize their swipe files, and store references all in one beautiful, private place.
                  </p>
                  <PremiumButton
                    href="/use-cases/marketers"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                    iconPosition="right"
                  >
                    Read more
                  </PremiumButton>
                </div>
              </Card3D>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-20 relative">
        <GradientBackground
          variant="blue-purple"
          intensity="light"
          blur="xl"
          pattern="waves"
          className="absolute inset-0 z-0"
        />

        <div className="container max-w-4xl relative z-10 pr-44">
          <ParallaxSection speed={0.3} opacity={true}>
            <RichHeading
              tag="h2"
              type="gradient"
              accent="purple"
              className="text-3xl md:text-4xl mb-6"
            >
              Get Mind Updates
            </RichHeading>
          </ParallaxSection>

          <FadeInUp delay={0.2}>
            <p className="text-lg text-mymind-dark/80 mb-8">
              Subscribe to our newsletter to stay updated on the latest features, thoughts,
              and improvements to mymind.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col md:flex-row gap-4 max-w-md ">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <PremiumButton
                variant="primary"
                size="md"
              >
                Subscribe
              </PremiumButton>
            </div>

            <p className="text-sm text-mymind-dark/60 mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
