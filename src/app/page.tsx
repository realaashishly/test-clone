import FadeInUp from "@/components/animations/FadeInUp";
import StaggerContainer, {
    StaggerItem,
} from "@/components/animations/StaggerContainer";
import TextReveal from "@/components/animations/TextReveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { Check } from "lucide-react";
import Image from "next/image";

const FEATURES = [
    // {
    //     title: "AI Tools Radar",
    //     description:
    //         '"New" isn\'t enough. We track tools that actually change outcomes. Get alerts when any app drops any announcements. Steal spots before anyone to the access their limited testing.',
    //     imageUrl: "https://ext.same-assets.com/4224150693/1130594375.webp",
    //     imageAlt: "AI Tools Radar",
    // },
    // {
    //     title: "AI Agents Marketplace",
    //     description:
    //         "Build and customize your agents and Publish. Keep earning passive income depending on value your agent provides.",
    //     imageUrl: "https://ext.same-assets.com/1150599166/2392242294.webp",
    //     imageAlt: "AI Agents Marketplace",
    // },
    {
        title: "AI Art's Hidden Codes",
        description:
            "The prompts behind million of views posts? They're here. Steal the exact prompt from creators and make similar arts.",
        imageUrl: "/aiart3.png",
        imageAlt: "AI Art's Hidden Codes",
    },
    {
        title: "AI Video Hacks",
        description:
            "Kling can't make you Spielberg. Our prompts can. Reverse-engineer to write the perfect prompt and learn several tricks to make your videos stand out.",
        imageUrl: "/aiart2.png",
        imageAlt: "AI Video Hacks",
    },
];

const WHY_KORIZEN_EXISTS = [
    "AI won't wait for you to \"catch up.\" Korizen bridges the gap between today's panic and future massive paychecks.",
    'We don\'t do "productivity tips." We engineer systems that let you:',
    "Absorb critical AI updates in few minutes.",
    "Deploy agents in front of thousands to test, improve and make money.",
    "Create viral art/videos using prompts tested on 10M+ eyeballs.",
    "Learn the language of the future.",
];

export default function Home() {
    return (
        <div className='flex flex-col'>
            {/* Hero Section */}
            <section className='w-full min-h-screen relative flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 bg-white'>
                {/* <GradientBackground
                    variant="orange-pink"
                    intensity="medium"
                    blur="xl"
                    className="absolute inset-0 z-0"
                    animated={true}
                /> */}

                <div className='container mx-auto relative z-10 max-w-5xl'>
                    <div className='mb-8'>
                        <TextReveal
                            text='Simplify AI.'
                            type='word'
                            className='text-5xl md:text-7xl mb-2 text-left'
                            delay={0.3}
                            staggerChildren={0.08}
                        />
                        <TextReveal
                            text='Amplify Creativity.'
                            type='word'
                            className='text-5xl md:text-7xl text-left'
                            delay={0.6}
                            staggerChildren={0.08}
                        />
                    </div>

                    <FadeInUp delay={1.2} distance={30}>
                        <p className='text-lg md:text-xl text-mymind-dark/80 mb-12 max-w-2xl text-left'>
                            Helping the people understand the language of the
                            future and making innovation accessible.
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={1.4} distance={30}>
                        <div className='flex flex-col md:flex-row items-start gap-4 mb-16'>
                            <PremiumButton
                                href='/join-alpha'
                                variant='blueGradient'
                                size='lg'
                                icon={<Check size={16} />}
                            >
                                Register for the Private Alpha
                            </PremiumButton>
                        </div>
                    </FadeInUp>
                </div>
            </section>

            {/* Manifesto Section */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto max-w-5xl'>
                    <FadeInUp>
                        <h2 className='text-3xl md:text-4xl font-louize mb-8 text-left'>
                            The Problem No One's Solving
                        </h2>
                    </FadeInUp>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-8 text-left'>
                                The future isn't just coming, it's bulldozing
                                jobs and replacing old skills. Thousands of AI
                                tools flood the market every year. 44% don't
                                know how to use them and around 88% has only
                                used few times. $184Bn is the size of AI market
                                and it will reach $826Bn by 2030. Meanwhile, the
                                Future of Jobs Report screams: 39% of your
                                skills will be obsolete by 2030.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-8 text-left'>
                                You're drowning in updates, paralyzed by FOMO,
                                and left behind by jargon. Graphic designers
                                don't know Midjourney. Many Marketers still does
                                not know how to use AI to generate leads. This
                                isn't a gap—it's a canyon and of course as its
                                said, "AI won't replace humans, but humans using
                                AI will replace humans who don't".
                            </p>
                        </FadeInUp>

                        <FadeInUp>
                            <h2 className='text-3xl md:text-4xl font-louize mb-8 text-left'>
                                The First & Only AI Ecosystem Built for Survival
                            </h2>
                        </FadeInUp>

                        <FadeInUp delay={0.1}>
                            <p className='mb-8 text-left'>
                                AI isn't a luxury—it's oxygen. But breathing
                                requires filtering out the poison. Korizen isn't
                                another platform. It's a declaration of war
                                against information overload. We strip datas
                                from - thousands of underlying problem of
                                internet age down to what matters: what works,
                                what's new, and what you need to win.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-8 text-left'>
                                You don't have 12 hours a day to "learn AI." So
                                we hacked time. Korizen is developed in a way
                                that you Spend 10 minutes here, and you'll
                                outpace peers grinding for days. Knowledge isn't
                                power, curated knowledge is.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto max-w-5xl'>
                    <FadeInUp>
                        <h2 className='text-3xl md:text-4xl font-louize mb-12 text-left'>
                            2 Ways Korizen Rewires Your Brain
                        </h2>
                    </FadeInUp>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
                        {FEATURES.map((feature, index) => (
                            <FadeInUp
                                delay={0.1 * (index + 1)}
                                key={feature.title}
                            >
                                <PremiumCard className='p-6 h-full flex flex-col min-h-[450px]'>
                                    <div className='flex flex-col flex-grow'>
                                        <h3 className='text-xl font-louize mb-4 text-left'>
                                            {feature.title}
                                        </h3>
                                        <p className='text-mymind-dark/80 mb-6 text-left flex-grow'>
                                            {feature.description}
                                        </p>
                                    </div>
                                    <div className='mt-auto w-full'>
                                        <Image
                                            src={feature.imageUrl}
                                            alt={feature.imageAlt}
                                            width={400}
                                            height={300}
                                            className='rounded-lg shadow-md object-cover'
                                        />
                                    </div>
                                </PremiumCard>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className='w-full py-20 px-6 md:px-10 relative bg-white'>
                <div className='container mx-auto max-w-5xl relative z-10'>
                    <FadeInUp>
                        <TextReveal
                            text='Why Korizen Exists'
                            type='word'
                            className='text-3xl md:text-4xl mb-8 text-left'
                            color=''
                        />
                    </FadeInUp>

                    <StaggerContainer delay={0.3} staggerChildren={0.15}>
                        {WHY_KORIZEN_EXISTS.map((text, index) => (
                            <StaggerItem key={index}>
                                <p className='text-lg mb-4 text-left'>{text}</p>
                            </StaggerItem>
                        ))}

                        <StaggerItem>
                            <div className='mt-8'>
                                <PremiumButton
                                    href='/join-alpha'
                                    variant='blueGradient'
                                    size='lg'
                                >
                                    Sign up for alpha
                                </PremiumButton>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </div>
    );
}