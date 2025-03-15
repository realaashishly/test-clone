import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer, {
    StaggerItem,
} from "@/components/animations/StaggerContainer";
import TextReveal from "@/components/animations/TextReveal";
import GradientBackground from "@/components/ui/gradient-background";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className='flex flex-col items-center'>
            {/* Hero Section */}
            <section className='w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-16'>
                <GradientBackground
                    variant='orange-pink'
                    intensity='medium'
                    blur='xl'
                    className='absolute inset-0 z-0'
                    animated={true}
                />

                <div className='container mx-auto text-center relative z-10 max-w-5xl'>
                    <div className='mb-8'>
                        <TextReveal
                            text='Remember everything.'
                            type='word'
                            className='text-5xl md:text-7xl mb-2'
                            delay={0.3}
                            staggerChildren={0.08}
                        />
                        <TextReveal
                            text='Organize nothing.'
                            type='word'
                            className='text-5xl md:text-7xl'
                            delay={0.6}
                            staggerChildren={0.08}
                        />
                    </div>

                    <FadeInUp delay={1.2} distance={30}>
                        <p className='text-lg text-left md:text-xl text-mymind-dark/80 mb-12 max-w-2xl'>
                            All your notes, bookmarks, inspiration, articles and
                            images in one single, private place.
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={1.4} distance={30}>
                        <div className='flex flex-col md:flex-row items-center gap-4 mb-16'>
                            <PremiumButton
                                href='https://access.mymind.com/signin'
                                variant='primary'
                                size='lg'
                                icon={<Check size={16} />}
                            >
                                Try it out
                            </PremiumButton>

                            <PremiumButton
                                variant='ghost'
                                size='lg'
                                icon={<ArrowRight size={16} />}
                                iconPosition='right'
                            >
                                Watch the intro
                            </PremiumButton>
                        </div>
                    </FadeInUp>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container max-w-4xl'>
                    <FadeInUp>
                        <h2 className='text-3xl md:text-4xl font-louize mb-8'>
                            Our Manifesto
                        </h2>
                    </FadeInUp>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className=' mb-8'>
                                In a time when every company has a bid on our
                                data, when we exchange our privacy for
                                information, when every move we make is
                                influenced by how others will perceive it, we
                                have little space to call our own.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className=' mb-8'>
                                Our minds have been taken captive by social
                                approval systems, by newsfeeds and timelines, by
                                advertisements and corporate agendas. Our
                                information is scattered across platforms, bound
                                by terms and conditions.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.3}>
                            <p className=' font-bold mb-8'>
                                What should have never been lost is now yours
                                again. We promise:
                            </p>
                        </FadeInUp>

                        <StaggerContainer
                            className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-12'
                            staggerChildren={0.05}
                            delay={0.4}
                        >
                            <StaggerItem className='flex'>
                                <ul>
                                    <li className='list-disc'>
                                        {" "}
                                        <span className=' text-mymind-gray'>
                                            social features
                                        </span>
                                    </li>
                                </ul>
                            </StaggerItem>
                            <StaggerItem className='flex items-center'>
                                <ul>
                                    <li className='list-disc'>
                                        {" "}
                                        <span className=' text-mymind-gray'>
                                            vanity metrics
                                        </span>
                                    </li>
                                </ul>
                            </StaggerItem>
                            <StaggerItem className='flex items-center'>
                                <ul>
                                    <li className='list-disc'>
                                        {" "}
                                        <span className=' text-mymind-gray'>
                                            invasive tracking
                                        </span>
                                    </li>
                                </ul>
                            </StaggerItem>
                            <StaggerItem className='flex items-center'>
                                <ul>
                                    <li className='list-disc'>
                                        {" "}
                                        <span className=' text-mymind-gray'>
                                            social pressure
                                        </span>
                                    </li>
                                </ul>
                            </StaggerItem>
                            <StaggerItem className='flex items-center'>
                                <ul>
                                    <li className='list-disc'>
                                        {" "}
                                        <span className=' text-mymind-gray'>
                                            collaboration
                                        </span>
                                    </li>
                                </ul>
                            </StaggerItem>
                            <StaggerItem className='flex items-center'>
                                <ul>
                                    <li className='list-disc'>
                                        {" "}
                                        <span className=' text-mymind-gray'>
                                            ads
                                        </span>
                                    </li>
                                </ul>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Extension Section */}
            <section className='w-full py-20 px-6 md:px-10 relative'>
                <GradientBackground
                    variant='blue-purple'
                    intensity='light'
                    blur='xl'
                    pattern='dots'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto max-w-4xl relative z-10'>
                    <FadeInUp>
                        <h2 className='text-3xl md:text-4xl font-louize mb-8'>
                            The first and only extension
                            <br />
                            for your real mind.
                        </h2>
                    </FadeInUp>

                    <FadeInUp delay={0.2}>
                        <p className='text-lg mb-12 max-w-2xl'>
                            One place for everything you care about. You don't
                            need to file it, label or even tag it. It's all
                            magically organized and visualized for you.
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={0.3}>
                        <PremiumCard
                            className='bg-primary text-white py-16 px-6 md:px-12 mb-20'
                            highlightBorder={true}
                        >
                            <h3 className='text-2xl md:text-3xl font-louize mb-6'>
                                Folders are dead. This is your
                                <br />
                                personal search engine.
                            </h3>

                            <p className='mb-8 max-w-2xl'>
                                Search by color, keyword, brand, date — whatever
                                you think of first. Associative search & visual
                                cues work with your brain to find it instantly.
                            </p>

                            <PremiumButton
                                href='/videos'
                                variant='secondary'
                                icon={<ArrowRight size={16} />}
                                iconPosition='right'
                            >
                                Watch the video
                            </PremiumButton>
                        </PremiumCard>
                    </FadeInUp>
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto max-w-5xl'>
                    <FadeInUp>
                        <h2 className='text-3xl md:text-4xl font-louize mb-12 text-center'>
                            A treasure trove of ideas,
                            <br />
                            inspiration & references
                        </h2>
                    </FadeInUp>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
                        <FadeInUp delay={0.1}>
                            <PremiumCard className='p-6 h-full flex flex-col'>
                                <h3 className='text-xl font-louize mb-4'>
                                    Frictionless notetaking
                                </h3>
                                <p className='text-mymind-dark/80 mb-6'>
                                    Ideas no longer slip away. Take quick notes
                                    on the go and enter Focus Mode to expand on
                                    them later. Clean and simple.
                                </p>
                                <div className='mt-auto'>
                                    <Image
                                        src='https://ext.same-assets.com/4224150693/1130594375.webp'
                                        alt='Frictionless notetaking'
                                        width={400}
                                        height={300}
                                        className='rounded-lg shadow-md'
                                    />
                                </div>
                            </PremiumCard>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <PremiumCard className='p-6 h-full flex flex-col'>
                                <h3 className='text-xl font-louize mb-4'>
                                    Smart Bookmarking
                                </h3>
                                <p className='text-mymind-dark/80 mb-6'>
                                    No URL is treated the same way. Your new
                                    mind knows if an item is an article, a
                                    product, a book or even a recipe. Every link
                                    is saved in a beautiful way that makes
                                    sense.
                                </p>
                                <div className='mt-auto'>
                                    <Image
                                        src='https://ext.same-assets.com/1150599166/2392242294.webp'
                                        alt='Smart Bookmarking'
                                        width={400}
                                        height={300}
                                        className='rounded-lg shadow-md'
                                    />
                                </div>
                            </PremiumCard>
                        </FadeInUp>

                        <FadeInUp delay={0.3}>
                            <PremiumCard className='p-6 h-full flex flex-col'>
                                <h3 className='text-xl font-louize mb-4'>
                                    Read without distractions
                                </h3>
                                <p className='text-mymind-dark/80 mb-6'>
                                    Save entire articles to your mind to read
                                    without clutter, ads or annoying pop-ups.
                                    mymind strips out the excess so you can
                                    focus.
                                </p>
                                <div className='mt-auto'>
                                    <Image
                                        src='https://ext.same-assets.com/1591477012/3154654084.webp'
                                        alt='Read without distractions'
                                        width={400}
                                        height={300}
                                        className='rounded-lg shadow-md'
                                    />
                                </div>
                            </PremiumCard>
                        </FadeInUp>

                        <FadeInUp delay={0.4}>
                            <PremiumCard className='p-6 h-full flex flex-col'>
                                <h3 className='text-xl font-louize mb-4'>
                                    Instant collections
                                </h3>
                                <p className='text-mymind-dark/80 mb-6'>
                                    Create Smart Spaces that auto-sort what you
                                    save, on your terms. Your mind automatically
                                    knows where it goes.
                                </p>
                                <div className='mt-auto'>
                                    <Image
                                        src='https://ext.same-assets.com/2141993859/4180095474.webp'
                                        alt='Instant collections'
                                        width={400}
                                        height={300}
                                        className='rounded-lg shadow-md'
                                    />
                                </div>
                            </PremiumCard>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className='w-full py-20 px-6 md:px-10 relative'>
                <GradientBackground
                    variant='orange-pink'
                    intensity='strong'
                    blur='lg'
                    pattern='waves'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto max-w-3xl text-center relative z-10'>
                    <FadeInUp>
                        <TextReveal
                            text="We're trying something different with mymind."
                            type='word'
                            className='text-3xl md:text-4xl mb-8 '
                            color=''
                        />
                    </FadeInUp>

                    <StaggerContainer delay={0.3} staggerChildren={0.15}>
                        <StaggerItem>
                            <p className='text-lg mb-4  text-left '>
                                It's a refreshing approach to remembering the
                                things you care about. One place for everything.
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <p className='text-lg mb-4 text-left'>
                                We put privacy first.
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <p className='text-lg mb-4 text-left'>
                                We love beautiful, simple design that considers
                                and respects how you naturally think and work.
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <p className='text-lg mb-8 text-left'>
                                We'd rather you spend less time managing your
                                life, and more time doing what makes you happy.
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <PremiumButton
                                href='#'
                                variant='secondary'
                                size='lg'
                            >
                                Sign up for free
                            </PremiumButton>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}
