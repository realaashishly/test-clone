import FadeInUp from "@/components/animations/FadeInUp";
import ParallaxSection from "@/components/animations/ParallaxSection";
import { PremiumButton } from "@/components/ui/premium-button";
import { RichHeading } from "@/components/ui/rich-heading";
import { ArrowRight } from "lucide-react";

export default function WhyPage() {
    return (
        <div className='flex flex-col items-center'>
            {/* Hero Section */}
            <section className='w-full min-h-[80vh] relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-16 bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl text-left'>
                    <ParallaxSection speed={0.5} opacity={true}>
                        <RichHeading
                            tag='h1'
                            type='gradient'
                            accent='blue'
                            className='text-5xl md:text-7xl mb-10'
                            staggerChildren={0.05}
                            delay={0.2}
                        >
                            Why Korizen?
                        </RichHeading>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-2xl'>
                        <FadeInUp delay={0.6} distance={30}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-6'>
                                Korizen was never supposed to exist. It began as
                                a midnight experiment, a way to organize our own
                                chaos.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.8} distance={30}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-6'>
                                We were drowning in tabs: AI tool updates,
                                half-built agents, scattered prompts.
                                Productivity apps made it worse. "Zen" felt like
                                a corporate lie. So we hacked together a
                                solution.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={1} distance={30}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-6'>
                                Chaos is inevitable. Peace is a design choice.
                                Korizen isn’t minimalist just for aesthetics.
                                It’s minimalist for survival.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 1: Human > Algorithm */}
            <section className='w-full py-20 md:px-10 bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl text-left'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-start mb-10'>
                            <RichHeading
                                tag='h2'
                                type='underlined'
                                accent='primary'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Human &gt; Algorithm
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                No matter how advanced we become, a human in the
                                loop will always be needed to perform tasks.
                                That's why educating people became our primary
                                objective.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-10'>
                                Korizen is built to amplify your career. While
                                85% of AI certifications are toilet paper,
                                recruiters always love one thing: track records.
                                Korizen helps you showcase every agent you’ve
                                deployed and its financial impact, making your
                                profile super attractive to employers.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 2: Zen Isn’t a Feature. It’s the Foundation. */}
            <section className='w-full py-20 px-6 md:px-10 relative bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl text-left'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-start mb-10'>
                            <RichHeading
                                tag='h2'
                                type='highlighted'
                                accent='blue'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Zen Isn’t a Feature. It’s the Foundation.
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                Korizen is designed to bring peace to your
                                workflow. We believe that chaos is inevitable,
                                but peace is a design choice. Our minimalist
                                approach isn’t just for aesthetics—it’s for
                                survival.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-6'>
                                We’re building features that don’t even have
                                names yet. Your pain points shape us. Beyond
                                what you see here, there will be many more
                                additions when we launch our beta.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.3}>
                            <p className='mb-10'>
                                Korizen is more than a tool—it’s a foundation
                                for a better way to work, think, and create.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 3: Your Career, Amplified */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl text-left'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-start mb-10'>
                            <RichHeading
                                tag='h2'
                                type='gradient'
                                accent='pink'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Your Career, Amplified
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                Korizen is designed to help you stand out in a
                                competitive job market. By showcasing your
                                deployed agents and their financial impact,
                                you’ll have a track record that recruiters can’t
                                ignore.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-10'>
                                We’re building tools that go beyond
                                certifications—tools that prove your expertise
                                and value in real-world applications.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 4: Join the Beta */}
            <section className='w-full py-20 px-6 md:px-10 relative bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl text-left'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-start mb-10'>
                            <RichHeading
                                tag='h2'
                                type='accented'
                                accent='primary'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Join the Alpha and Shape the Future
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                Korizen is more than a tool, it’s a movement. By
                                joining our beta, you’ll have the opportunity to
                                shape the future of productivity and AI.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-6'>
                                Your feedback will directly influence the
                                features we build and the problems we solve.
                                Together, we can create a tool that truly serves
                                its users.
                            </p>
                        </FadeInUp>
                    </div>

                    <div className='flex justify-start'>
                        <PremiumButton
                            href='/join-beta'
                            variant='blueGradient'
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