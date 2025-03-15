import FadeInUp from "@/components/animations/FadeInUp";
import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { Card3D } from "@/components/ui/card3d";
import GradientBackground from "@/components/ui/gradient-background";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { RichHeading } from "@/components/ui/rich-heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HowPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-16">
        <GradientBackground
          variant="yellow-peach"
          intensity="medium"
          blur="xl"
          pattern="dots"
          className="absolute inset-0 z-0"
        />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <ParallaxSection speed={0.5} opacity={true}>
            <div className="bg-white rounded-full py-3 inline-block mb-10 shadow-sm">
              <RichHeading
                tag="h1"
                type="gradient"
                accent="primary"
                className="text-2xl md:text-3xl"
              >
                How does mymind work?
              </RichHeading>
            </div>
          </ParallaxSection>

          <div className="prose prose-lg max-w-2xl">
            <FadeInUp delay={0.3}>
              <p className="text-lg md:text-xl text-mymind-dark/90 mb-12 text-left">
                There's a lot of magic and some artificial intelligence,
                but let's keep it simple for now...
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <p className="text-lg md:text-xl text-mymind-dark/90 mb-8 text-left">
                Everytime you find something you want to
                remember, you just save it to <Link href="http://access.mymind.com/" className="text-primary hover:text-primary/80 transition-colors">mymind</Link>.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer delay={0.7} staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl">
            <StaggerItem>
              <Card3D intensity={10} className="overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/2794811294/597816556.png"
                  alt="mymind bookmarking"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </Card3D>
            </StaggerItem>
            <StaggerItem>
              <Card3D intensity={10} className="overflow-hidden rounded-lg">
                <Image
                  src="https://ext.same-assets.com/866939575/4289587474.png"
                  alt="web clippings"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </Card3D>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Simple Is Better Section */}
      <section className="w-full py-20 px-6 md:px-10 bg-white">
        <div className="container mx-auto relative z-10 max-w-4xl pr-44">
          <div className="prose prose-lg max-w-none text-left ">
            <FadeInUp>
              <RichHeading
                tag="h2"
                type="accented"
                accent="primary"
                className="text-xl md:text-2xl mb-10"
              >
                Yes! No need to waste time categorizing or organizing. Your new mind
                does it for you, so you can immediately find what you need later.
              </RichHeading>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Features For Different Users Section */}
      <section className="w-full py-20 px-6 md:px-10 relative">
        <GradientBackground
          variant="blue-purple"
          intensity="light"
          blur="lg"
          pattern="dots"
          className="absolute inset-0 z-0"
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeInUp>
            <RichHeading
              tag="h2"
              type="gradient"
              accent="blue"
              className="text-3xl md:text-4xl mb-16 text-left"
            >
              Made for designers, writers, researchers,
              developers & visual minds of all kinds.
            </RichHeading>
          </FadeInUp>

          {/* Designers */}
          <FadeInUp delay={0.2}>
            <Card3D
              intensity={5}
              hoverScale={1.01}
              backgroundGradient={true}
              backgroundColors="linear-gradient(135deg, #2c3136, #1a1d20)"
              className="mb-10 overflow-hidden rounded-lg"
            >
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-louize mb-4 text-white">Your moodboard & visual inspiration</h3>
                  <p className="text-white/80 mb-6">
                    Designers use mymind to collect visual inspiration, save their favorite online
                    resources and generate moodboards on the fly within seconds.
                  </p>

                  <div className="mb-6">
                    <h4 className="uppercase text-white/50 text-xs tracking-wider mb-3">WHY DESIGNERS LOVE IT</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Generate moodboards in seconds
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Search images by color
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Save favorite colors & color palettes
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Easily save visual references with one click
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://ext.same-assets.com/2682265496/2436572588.png"
                    alt="For designers"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card3D>
          </FadeInUp>

          {/* Writers */}
          <FadeInUp delay={0.3}>
            <Card3D
              intensity={5}
              hoverScale={1.01}
              backgroundGradient={true}
              backgroundColors="linear-gradient(135deg, #93a4c7, #7583a4)"
              className="mb-10 overflow-hidden rounded-lg"
            >
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-louize mb-4 text-white">Distraction free writing & ideation.</h3>
                  <p className="text-white/80 mb-6">
                    Writers use mymind to take notes, free-write drafts, save text highlights from the
                    web and collect inspiration for their next big article or award winning ad.
                  </p>

                  <div className="mb-6">
                    <h4 className="uppercase text-white/50 text-xs tracking-wider mb-3">WHY WRITERS LOVE IT</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Quick & effortless note taking
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <span className="text-white">Beautiful focused writing in focus mode</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <span className="text-white">Save writing references with one click</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Collect highlights & inspiration
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://ext.same-assets.com/2062884624/713333982.png"
                    alt="For writers"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card3D>
          </FadeInUp>

          {/* Marketers */}
          <FadeInUp delay={0.4}>
            <Card3D
              intensity={5}
              hoverScale={1.01}
              backgroundGradient={true}
              backgroundColors="linear-gradient(135deg, #f85a24, #ed7d5b)"
              className="mb-10 overflow-hidden rounded-lg"
            >
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-louize mb-4 text-white">A marketer's swipe-file.</h3>
                  <p className="text-white/80 mb-6">
                    Every marketer should keep a swipe file with inspiration and best practices for
                    copywriting, sales or campaign strategy. mymind is exactly that.
                  </p>

                  <div className="mb-6">
                    <h4 className="uppercase text-white/50 text-xs tracking-wider mb-3">WHY MARKETERS LOVE IT</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <span className="text-white">One-click saving of visual references</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <Link href="/videos" className="text-white hover:text-white/80 transition-colors">
                          OCR text recognition for finding text in visuals
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <span className="text-white">Contextual notes & todos for swipe files</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <span className="text-white">Collect highlights & inspiration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://ext.same-assets.com/4202084212/2966130167.png"
                    alt="For marketers"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card3D>
          </FadeInUp>

          {/* Developers */}
          <FadeInUp delay={0.5}>
            <Card3D
              intensity={5}
              hoverScale={1.01}
              backgroundGradient={true}
              backgroundColors="linear-gradient(135deg, #2c3136, #1a1d20)"
              className="mb-10 overflow-hidden rounded-lg"
            >
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-louize mb-4 text-white">Inspiration and resource hub.</h3>
                  <p className="text-white/80 mb-6">
                    Developers use mymind to bookmark and organize their go-to resources.
                    Keep all your code snippets in one place. Easy to find when you need them.
                  </p>

                  <div className="mb-6">
                    <h4 className="uppercase text-white/50 text-xs tracking-wider mb-3">WHY DEVELOPERS LOVE IT</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="https://www.youtube.com/watch?v=YAMDX79BWF4" className="text-white hover:text-primary transition-colors">
                          Quick & effortless markdown note taking
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <Link href="/videos" className="text-white hover:text-primary transition-colors">
                          Keep track of todos
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <span className="text-white">Easy save & recall of code snippets</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">→</span>
                        <span className="text-white">Collect inspiration & resource material</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://ext.same-assets.com/2993080936/317424285.png"
                    alt="For developers"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card3D>
          </FadeInUp>

          {/* Researchers */}
          <FadeInUp delay={0.6}>
            <Card3D
              intensity={5}
              hoverScale={1.01}
              backgroundGradient={true}
              backgroundColors="linear-gradient(135deg, #9d9da3, #75757a)"
              className="mb-10 overflow-hidden rounded-lg"
            >
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-louize mb-4 text-white">Your private knowledge-base.</h3>
                  <p className="text-white/80 mb-6">
                    Researchers use mymind to collect data and find unexpected connections between
                    bits of information. From web clippings, PDFs to articles and research papers.
                    All in one place.
                  </p>

                  <div className="mb-6">
                    <h4 className="uppercase text-white/50 text-xs tracking-wider mb-3">WHY RESEARCHERS LOVE IT</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <span className="text-white">Easy to add contextual notes to material</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <span className="text-white">Reading Mode for articles & research papers</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <span className="text-white">Bi-directional linking (coming soon)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-white">→</span>
                        <Link href="/videos" className="text-white hover:text-white/80 transition-colors">
                          Text highlights & OCR text recognition
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://ext.same-assets.com/1896530277/3984393016.png"
                    alt="For researchers"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card3D>
          </FadeInUp>

          {/* Everyone */}
          <FadeInUp delay={0.7}>
            <Card3D
              intensity={5}
              hoverScale={1.01}
              backgroundGradient={true}
              backgroundColors="linear-gradient(135deg, #b461a6, #8c4a81)"
              className="overflow-hidden rounded-lg"
            >
              <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-louize mb-4 text-white">An extension for your mind.</h3>
                  <p className="text-white/80 mb-6">
                    Use it for your recipes. Your meme collection. Your poems. Your reading list.
                    Your vision board. Your to-do list. Or all of the above. There are no rules.
                    It's your mind, and you can use it as you please.
                  </p>

                  <div className="mb-6">
                    <h4 className="uppercase text-white/50 text-xs tracking-wider mb-3">WHY EVERYONE LOVES IT</h4>
                    <p className="text-white/80">
                      Everyone's mind looks and works different. But the easy to use nature of
                      mymind makes it adapt to your specific use cases. Your mind might look and
                      work differently than someone else's, and that's totally okay.
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://ext.same-assets.com/1735982407/1763518485.png"
                    alt="For everyone"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card3D>
          </FadeInUp>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="w-full py-20 px-6 md:px-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60vh] h-[40vh] rounded-full bg-gradient-blue-purple opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <FadeInUp>
            <RichHeading
              tag="h2"
              type="gradient"
              accent="blue"
              className="text-3xl md:text-4xl mb-12"
            >
              We believe software should stay out of the
              way and let you focus on what matters —
              which isn't software.
            </RichHeading>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeInUp delay={0.1}>
              <PremiumCard className="p-6" raised={true}>
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/1306614057/3689660552.png"
                    alt="Beauty icon"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-xl font-louize ml-3">Beauty is<br />a function.</h3>
                </div>

                <p className="text-mymind-dark/80 mb-4">
                  If we strive to make it beautiful, we automatically make it useful.
                  Design that pleases the mind serves it.
                </p>

                <p className="text-mymind-dark/80">
                  Our minds are a beautiful mess. Instead of interfering with that, we embrace it.
                </p>
              </PremiumCard>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <PremiumCard className="p-6" raised={true}>
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/1822051134/1479622879.png"
                    alt="Invisible icon"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-xl font-louize ml-3">Make it<br />invisible.</h3>
                </div>

                <p className="text-mymind-dark/80 mb-4">
                  The less you think about mymind, the better. We believe in clutter-free
                  experiences without dropdowns, filters and the usual UI you'll find in other apps.
                </p>

                <p className="text-mymind-dark/80">
                  Your mind should be a place of rest and inspiration.
                </p>
              </PremiumCard>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <PremiumCard className="p-6" raised={true}>
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/1452410014/1348644055.png"
                    alt="Magic icon"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-xl font-louize ml-3">Less features,<br />more magic.</h3>
                </div>

                <p className="text-mymind-dark/80 mb-4">
                  We're not concerned with churning out more features and functionalities.
                  Your mind *just works.*
                </p>

                <p className="text-mymind-dark/80">
                  It doesn't really matter how. It does the work for you, not the other way around.
                </p>
              </PremiumCard>
            </FadeInUp>
          </div>

          <div className="text-center">
            <PremiumButton
              href="/why"
              variant="outline"
              size="lg"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Read about our why's
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
}
