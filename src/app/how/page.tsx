import FadeInUp from "@/components/animations/FadeInUp";
import ParallaxSection from "@/components/animations/ParallaxSection";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { Card3D } from "@/components/ui/card3d";
import GradientBackground from "@/components/ui/gradient-background";
import { PremiumButton } from "@/components/ui/premium-button";
import { RichHeading } from "@/components/ui/rich-heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HowPage() {
    return (
        <div className='flex flex-col items-center'>
            {/* Hero Section */}
            <section className='w-full min-h-[70vh] relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-16'>
                <GradientBackground
                    variant='yellow-peach'
                    intensity='medium'
                    blur='xl'
                    pattern='dots'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto relative z-10 max-w-4xl'>
                    <ParallaxSection speed={0.5} opacity={true}>
                        <div className='bg-white rounded-full py-3 px-6 inline-block mb-10 shadow-sm'>
                            <RichHeading
                                tag='h1'
                                type='gradient'
                                accent='primary'
                                className='text-2xl md:text-3xl'
                            >
                                How Korizen Works
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-2xl'>
                        <FadeInUp delay={0.3}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-12 text-left'>
                                A Blueprint for the AI-Powered Future
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.5}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-8 text-left'>
                                Built for the Builders (and Everyone Else).
                                Korizen isn’t a tool, it’s a force multiplier
                                for professionals, students, teachers,
                                developers, AI filmmakers, researchers, and
                                designers.
                            </p>
                        </FadeInUp>
                    </div>

                    <StaggerContainer
                        delay={0.7}
                        staggerChildren={0.2}
                        className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl'
                    >
                        <StaggerItem>
                            <Card3D
                                intensity={10}
                                className='overflow-hidden rounded-lg'
                            >
                                <Image
                                    src='https://ext.same-assets.com/2794811294/597816556.png'
                                    alt='Korizen for professionals'
                                    width={400}
                                    height={300}
                                    className='rounded-lg'
                                />
                            </Card3D>
                        </StaggerItem>
                        <StaggerItem>
                            <Card3D
                                intensity={10}
                                className='overflow-hidden rounded-lg'
                            >
                                <Image
                                    src='https://ext.same-assets.com/866939575/4289587474.png'
                                    alt='Korizen for creators'
                                    width={400}
                                    height={300}
                                    className='rounded-lg'
                                />
                            </Card3D>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Why Korizen Feels Like It Was Made for You Section */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl pr-44'>
                    <div className='prose prose-lg max-w-none text-left '>
                        <FadeInUp>
                            <RichHeading
                                tag='h2'
                                type='accented'
                                accent='primary'
                                className='text-xl md:text-2xl mb-10'
                            >
                                Why Korizen Feels Like It Was Made for You
                            </RichHeading>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Features For Different Users Section */}
            <section className='w-full py-20 px-6 md:px-10 relative'>
                <GradientBackground
                    variant='blue-purple'
                    intensity='light'
                    blur='lg'
                    pattern='dots'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto max-w-5xl relative z-10'>
                    <FadeInUp>
                        <RichHeading
                            tag='h2'
                            type='gradient'
                            accent='blue'
                            className='text-3xl md:text-4xl mb-16 text-left'
                        >
                            Made for Designers, AI Filmmakers, Developers,
                            Teachers, and Professionals.
                        </RichHeading>
                    </FadeInUp>

                    {/* Designers & Visual Artists */}
                    <FadeInUp delay={0.2}>
                        <Card3D
                            intensity={5}
                            hoverScale={1.01}
                            backgroundGradient={true}
                            backgroundColors='linear-gradient(135deg, #2c3136, #1a1d20)'
                            className='mb-10 overflow-hidden rounded-lg'
                        >
                            <div className='p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h3 className='text-xl font-louize mb-4 text-white'>
                                        Your Moodboard, Reborn
                                    </h3>
                                    <p className='text-white/80 mb-6'>
                                        Korizen is where you will be able to
                                        understand how various art generator
                                        platforms work, publish your own
                                        signature style, and copy prompts behind
                                        trending reels.
                                    </p>

                                    <div className='mb-6'>
                                        <h4 className='uppercase text-white/50 text-xs tracking-wider mb-3'>
                                            WHY DESIGNERS LOVE IT
                                        </h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-primary transition-colors'
                                                >
                                                    Publish your signature art
                                                    style
                                                </Link>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-primary transition-colors'
                                                >
                                                    Copy prompts from trending
                                                    reels
                                                </Link>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-primary transition-colors'
                                                >
                                                    Explore art generator
                                                    platforms
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='https://ext.same-assets.com/2682265496/2436572588.png'
                                        alt='For designers'
                                        width={500}
                                        height={300}
                                        className='rounded-lg'
                                    />
                                </div>
                            </div>
                        </Card3D>
                    </FadeInUp>

                    {/* AI Filmmakers & Video Creators */}
                    <FadeInUp delay={0.3}>
                        <Card3D
                            intensity={5}
                            hoverScale={1.01}
                            backgroundGradient={true}
                            backgroundColors='linear-gradient(135deg, #93a4c7, #7583a4)'
                            className='mb-10 overflow-hidden rounded-lg'
                        >
                            <div className='p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h3 className='text-xl font-louize mb-4 text-white'>
                                        Your AI Film School (Without the Debt)
                                    </h3>
                                    <p className='text-white/80 mb-6'>
                                        Korizen cracks Kling, Runway, and Pika’s
                                        hidden tricks, so you can create movies
                                        you love!
                                    </p>

                                    <div className='mb-6'>
                                        <h4 className='uppercase text-white/50 text-xs tracking-wider mb-3'>
                                            WHY FILMMAKERS LOVE IT
                                        </h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-primary transition-colors'
                                                >
                                                    Master AI filmmaking tools
                                                </Link>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Learn hidden tricks from top
                                                    platforms
                                                </span>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Create movies effortlessly
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='https://ext.same-assets.com/2062884624/713333982.png'
                                        alt='For filmmakers'
                                        width={500}
                                        height={300}
                                        className='rounded-lg'
                                    />
                                </div>
                            </div>
                        </Card3D>
                    </FadeInUp>

                    {/* Developers & AI Engineers */}
                    <FadeInUp delay={0.4}>
                        <Card3D
                            intensity={5}
                            hoverScale={1.01}
                            backgroundGradient={true}
                            backgroundColors='linear-gradient(135deg, #f85a24, #ed7d5b)'
                            className='mb-10 overflow-hidden rounded-lg'
                        >
                            <div className='p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h3 className='text-xl font-louize mb-4 text-white'>
                                        Your AI Agents Marketplace
                                    </h3>
                                    <p className='text-white/80 mb-6'>
                                        Build amazing AI agents, publish them,
                                        receive feedback, and earn.
                                    </p>

                                    <div className='mb-6'>
                                        <h4 className='uppercase text-white/50 text-xs tracking-wider mb-3'>
                                            WHY DEVELOPERS LOVE IT
                                        </h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-white'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Build and publish AI agents
                                                </span>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-white'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-white/80 transition-colors'
                                                >
                                                    Earn from your creations
                                                </Link>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-white'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Receive feedback and improve
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='https://ext.same-assets.com/4202084212/2966130167.png'
                                        alt='For developers'
                                        width={500}
                                        height={300}
                                        className='rounded-lg'
                                    />
                                </div>
                            </div>
                        </Card3D>
                    </FadeInUp>

                    {/* Teachers & Educators */}
                    <FadeInUp delay={0.5}>
                        <Card3D
                            intensity={5}
                            hoverScale={1.01}
                            backgroundGradient={true}
                            backgroundColors='linear-gradient(135deg, #2c3136, #1a1d20)'
                            className='mb-10 overflow-hidden rounded-lg'
                        >
                            <div className='p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h3 className='text-xl font-louize mb-4 text-white'>
                                        A Picture Speaks a Thousand Words
                                    </h3>
                                    <p className='text-white/80 mb-6'>
                                        Be it illustrations or lesson plans,
                                        making clear illustrations and crafting
                                        tricky exercises will definitely help
                                        your classroom.
                                    </p>

                                    <div className='mb-6'>
                                        <h4 className='uppercase text-white/50 text-xs tracking-wider mb-3'>
                                            WHY TEACHERS LOVE IT
                                        </h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <Link
                                                    href='https://www.youtube.com/watch?v=YAMDX79BWF4'
                                                    className='text-white hover:text-primary transition-colors'
                                                >
                                                    Create engaging lesson plans
                                                </Link>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-primary transition-colors'
                                                >
                                                    Craft tricky exercises
                                                </Link>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-primary'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Use illustrations to
                                                    simplify concepts
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='https://ext.same-assets.com/2993080936/317424285.png'
                                        alt='For teachers'
                                        width={500}
                                        height={300}
                                        className='rounded-lg'
                                    />
                                </div>
                            </div>
                        </Card3D>
                    </FadeInUp>

                    {/* Professionals & Companies */}
                    <FadeInUp delay={0.6}>
                        <Card3D
                            intensity={5}
                            hoverScale={1.01}
                            backgroundGradient={true}
                            backgroundColors='linear-gradient(135deg, #9d9da3, #75757a)'
                            className='mb-10 overflow-hidden rounded-lg'
                        >
                            <div className='p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div>
                                    <h3 className='text-xl font-louize mb-4 text-white'>
                                        Projects for Professionals & Companies
                                    </h3>
                                    <p className='text-white/80 mb-6'>
                                        We are developing a feature called
                                        Projects, which will help individuals
                                        and companies streamline their
                                        workflows.
                                    </p>

                                    <div className='mb-6'>
                                        <h4 className='uppercase text-white/50 text-xs tracking-wider mb-3'>
                                            WHY PROFESSIONALS LOVE IT
                                        </h4>
                                        <ul className='space-y-2'>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-white'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Streamline workflows with
                                                    Projects
                                                </span>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-white'>
                                                    →
                                                </span>
                                                <span className='text-white'>
                                                    Collaborate seamlessly
                                                </span>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='mr-2 text-white'>
                                                    →
                                                </span>
                                                <Link
                                                    href='/videos'
                                                    className='text-white hover:text-white/80 transition-colors'
                                                >
                                                    Enhance productivity
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='https://ext.same-assets.com/1896530277/3984393016.png'
                                        alt='For professionals'
                                        width={500}
                                        height={300}
                                        className='rounded-lg'
                                    />
                                </div>
                            </div>
                        </Card3D>
                    </FadeInUp>
                </div>
            </section>

            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl text-left'>
                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                We Believe in AI That Fades to the Background
                            </p>
                        </FadeInUp>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                Great tools don’t shout. They enable.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-10'>
                                Korizen isn’t here to drown you in dashboards or
                                bully you with pop-ups. We engineer AI to work
                                like gravity, invisible, essential, effortless.
                                Your focus belongs to creation, not
                                configuration.
                            </p>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                            <p className='mb-10'>This is just the prototype.</p>
                        </FadeInUp>
                        <FadeInUp delay={0.2}>
                            <ParallaxSection direction='up' speed={0.2}>
                                <div className='flex flex-col md:flex-row items-start mb-10'>
                                    <RichHeading
                                        tag='h2'
                                        type='accented'
                                        accent='primary'
                                        align='left'
                                        className='text-3xl md:text-4xl'
                                    >
                                        In 14 days, we open our gates to the
                                        first 1,000 rebels. You’ll get:
                                    </RichHeading>
                                </div>
                            </ParallaxSection>
                            <ul>
                                <li>
                                    Early access to AI Agents, Art Prompts, and
                                    Tools Radar.
                                </li>
                                <li>
                                    Direct influence over Korizen’s evolution
                                    (we listen, then we build).
                                </li>
                                <li>
                                    100 free credits to break things. No
                                    apologies.
                                </li>
                            </ul>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Final Call Section */}
            <section className='w-full py-20 px-6 md:px-10 bg-white relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60vh] h-[40vh] rounded-full bg-gradient-blue-purple opacity-10 blur-3xl'></div>
                </div>

                <div className='container mx-auto max-w-4xl relative z-10'>
                    <FadeInUp>
                        <RichHeading
                            tag='h2'
                            type='gradient'
                            accent='blue'
                            className='text-3xl md:text-4xl mb-12'
                        >
                            Experience Korizen
                        </RichHeading>
                    </FadeInUp>

                    <div className='flex justify-start'>
                        <PremiumButton
                            href='/join-beta'
                            variant='secondary'
                            size='lg'
                            icon={<ArrowRight size={16} />}
                            iconPosition='right'
                        >
                            Sign Up for Private Alpha
                        </PremiumButton>
                    </div>
                </div>
            </section>
        </div>
    );
}