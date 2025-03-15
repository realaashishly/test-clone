import FadeInUp from "@/components/animations/FadeInUp";
import ParallaxSection from "@/components/animations/ParallaxSection";
import { Card3D } from "@/components/ui/card3d";
import GradientBackground from "@/components/ui/gradient-background";
import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumCard } from "@/components/ui/premium-card";
import { RichHeading } from "@/components/ui/rich-heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhyPage() {
    return (
        <div className='flex flex-col items-center'>
            {/* Hero Section */}
            <section className='w-full min-h-[80vh] relative flex flex-col items-center justify-center px-6 md:px-10 pt-24 pb-16'>
                <GradientBackground
                    variant='blue-purple'
                    intensity='medium'
                    blur='xl'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto text-center relative z-10 max-w-4xl'>
                    <ParallaxSection speed={0.5} opacity={true}>
                        <RichHeading
                            tag='h1'
                            type='gradient'
                            accent='blue'
                            className='text-5xl md:text-7xl mb-10'
                            staggerChildren={0.05}
                            delay={0.2}
                        >
                            Why?
                        </RichHeading>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-2xl'>
                        <FadeInUp delay={0.6} distance={30}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-6 text-left'>
                                Everything we do starts with this question.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.8} distance={30}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-6 text-left'>
                                Why should mymind exist? Why should anyone care
                                to use it? Why is privacy so important to us?
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={1} distance={30}>
                            <p className='text-lg md:text-xl text-mymind-dark/90 mb-6 text-left'>
                                Eventually, the "why" led us here.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 1: Why Not Something Different */}
            <section className='w-full py-20 md:px-10 bg-white'>
                <div className=' container mx-auto relative z-10 max-w-4xl pr-44'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-center mb-10'>
                            <RichHeading
                                tag='h2'
                                type='underlined'
                                accent='primary'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Because why not do something different?
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                We've always approached product design this way.
                                We look at our current tools and ask ourselves
                                why it's done the way it is. Why do bookmarking
                                tools have social features? Why do we use
                                folders? Dropdowns? Are these outdated UI
                                patterns still useful or are they just clutter?
                                What if we do it better? Or just different?
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-10'>
                                With mymind we ultimately asked ourselves, why
                                not? Why not find a different way to save what
                                we care about? Why not remove all the other
                                stuff that just gets in the way? Forget how it's
                                usually done. Why not make it better?
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.3}>
                            <PremiumCard
                                className='bg-mymind-light p-6 rounded-lg mb-10'
                                highlightBorder={true}
                            >
                                <h3 className='text-sm uppercase tracking-wider text-mymind-gray mb-4'>
                                    MORE ON HOW WE THINK
                                </h3>

                                <div className='flex items-center mb-4'>
                                    <svg
                                        className='w-5 h-5 mr-2 text-mymind-dark'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M13 7L11.8845 7.00006C11.5424 7.00023 11.2994 7.00034 11.0884 7.01147C10.4607 7.04455 9.87933 7.20233 9.3453 7.5039C9.14867 7.62394 8.96324 7.77327 8.7894 7.94712C8.43045 8.30607 8.21591 8.83961 7.78683 9.9067L5.21317 15.0933C4.78409 16.1604 4.56955 16.6939 4.2106 17.0529C4.03676 17.2267 3.85133 17.3761 3.6547 17.4961C3.12067 17.7977 2.53929 17.9554 1.91155 17.9885C1.70058 17.9997 1.45759 17.9998 1.11549 17.9999L0 18'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                        />
                                    </svg>
                                    <Link
                                        href='/an-extension-for-your-real-mind-where-it-all-began'
                                        className='text-mymind-dark hover:text-primary transition-colors'
                                    >
                                        The beginning — How did we end up
                                        creating mymind?
                                    </Link>
                                </div>

                                <div className='flex items-center'>
                                    <svg
                                        className='w-5 h-5 mr-2 text-mymind-dark'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M13 7L11.8845 7.00006C11.5424 7.00023 11.2994 7.00034 11.0884 7.01147C10.4607 7.04455 9.87933 7.20233 9.3453 7.5039C9.14867 7.62394 8.96324 7.77327 8.7894 7.94712C8.43045 8.30607 8.21591 8.83961 7.78683 9.9067L5.21317 15.0933C4.78409 16.1604 4.56955 16.6939 4.2106 17.0529C4.03676 17.2267 3.85133 17.3761 3.6547 17.4961C3.12067 17.7977 2.53929 17.9554 1.91155 17.9885C1.70058 17.9997 1.45759 17.9998 1.11549 17.9999L0 18'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                        />
                                    </svg>
                                    <Link
                                        href='/how-can-we-build-an-extension-of-your-mind'
                                        className='text-mymind-dark hover:text-primary transition-colors'
                                    >
                                        A letter — How can we build an extension
                                        of your mind?
                                    </Link>
                                </div>
                            </PremiumCard>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 2: Better Relationships with Technology */}
            <section className='w-full py-20 px-6 md:px-10 relative'>
                <GradientBackground
                    variant='blue-purple'
                    intensity='light'
                    blur='lg'
                    pattern='dots'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto relative z-10 max-w-4xl pr-44'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-center mb-10'>
                            
                            <RichHeading
                                tag='h2'
                                type='highlighted'
                                accent='blue'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Because we need better relationships with
                                technology.
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                There was a time when our tools were just tools.
                                We picked up a hammer to build something, then
                                put it back on the shelf when we were finished.
                                It was a tool made for one simple purpose. It
                                had no ulterior motives.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-6'>
                                Fast forward to today, and our tools have
                                evolved. They've become smarter. They have
                                algorithms, feeds, notifications. They are
                                designed to make us spend as much time with them
                                as possible. We must feed them, manage them,
                                clean them, engage with them. Our tools no
                                longer serve our purpose. We serve theirs.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.3}>
                            <p className='mb-6'>
                                Could we not use the magic of technology to
                                build something better? Something that truly
                                benefits us, rather than taking from us.
                                Something designed in a way that fosters a
                                special relationship with our tools once again.
                                Something that serves a simple, necessary
                                purpose.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.4}>
                            <p className='mb-10'>We decided we could.</p>
                        </FadeInUp>

                        <FadeInUp delay={0.5}>
                            <Card3D
                                intensity={8}
                                hoverScale={1.01}
                                border={true}
                                borderGradient={true}
                                className='p-6 rounded-lg mb-10'
                            >
                                <h3 className='text-sm uppercase tracking-wider text-mymind-gray mb-4'>
                                    HOW WE MAKE OUR DECISIONS
                                </h3>

                                <div className='flex items-center mb-4'>
                                    <svg
                                        className='w-5 h-5 mr-2 text-mymind-dark'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M13 7L11.8845 7.00006C11.5424 7.00023 11.2994 7.00034 11.0884 7.01147C10.4607 7.04455 9.87933 7.20233 9.3453 7.5039C9.14867 7.62394 8.96324 7.77327 8.7894 7.94712C8.43045 8.30607 8.21591 8.83961 7.78683 9.9067L5.21317 15.0933C4.78409 16.1604 4.56955 16.6939 4.2106 17.0529C4.03676 17.2267 3.85133 17.3761 3.6547 17.4961C3.12067 17.7977 2.53929 17.9554 1.91155 17.9885C1.70058 17.9997 1.45759 17.9998 1.11549 17.9999L0 18'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                        />
                                    </svg>
                                    <Link
                                        href='/our-promise'
                                        className='text-mymind-dark hover:text-primary transition-colors'
                                    >
                                        Our promise from us to you
                                    </Link>
                                </div>

                                <div className='flex items-center mb-4'>
                                    <svg
                                        className='w-5 h-5 mr-2 text-mymind-dark'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M13 7L11.8845 7.00006C11.5424 7.00023 11.2994 7.00034 11.0884 7.01147C10.4607 7.04455 9.87933 7.20233 9.3453 7.5039C9.14867 7.62394 8.96324 7.77327 8.7894 7.94712C8.43045 8.30607 8.21591 8.83961 7.78683 9.9067L5.21317 15.0933C4.78409 16.1604 4.56955 16.6939 4.2106 17.0529C4.03676 17.2267 3.85133 17.3761 3.6547 17.4961C3.12067 17.7977 2.53929 17.9554 1.91155 17.9885C1.70058 17.9997 1.45759 17.9998 1.11549 17.9999L0 18'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                        />
                                    </svg>
                                    <Link
                                        href='/private-first'
                                        className='text-mymind-dark hover:text-primary transition-colors'
                                    >
                                        A thought from mymind on social features
                                    </Link>
                                </div>

                                <div className='flex items-center'>
                                    <svg
                                        className='w-5 h-5 mr-2 text-mymind-dark'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M13 7L11.8845 7.00006C11.5424 7.00023 11.2994 7.00034 11.0884 7.01147C10.4607 7.04455 9.87933 7.20233 9.3453 7.5039C9.14867 7.62394 8.96324 7.77327 8.7894 7.94712C8.43045 8.30607 8.21591 8.83961 7.78683 9.9067L5.21317 15.0933C4.78409 16.1604 4.56955 16.6939 4.2106 17.0529C4.03676 17.2267 3.85133 17.3761 3.6547 17.4961C3.12067 17.7977 2.53929 17.9554 1.91155 17.9885C1.70058 17.9997 1.45759 17.9998 1.11549 17.9999L0 18'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                        />
                                    </svg>
                                    <Link
                                        href='/adhd'
                                        className='text-mymind-dark hover:text-primary transition-colors'
                                    >
                                        A tool that works with your brain, not
                                        against it
                                    </Link>
                                </div>
                            </Card3D>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 3: New Beginnings */}
            <section className='w-full py-20 px-6 md:px-10 bg-white'>
                <div className='container mx-auto relative z-10 max-w-4xl pr-44'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-center mb-10'>
                            
                            <RichHeading
                                tag='h2'
                                type='gradient'
                                accent='pink'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Because new beginnings are beautiful.
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                There's a reason we don't have an import
                                feature. We like the idea of starting from
                                scratch. Not only because humanity revolves
                                around fresh starts, but this also requires you
                                to reevaluate your relationship with data. It
                                inspires you to be more conscious, more
                                meticulous, more mindful of the things you save
                                and collect.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-10'>
                                Digital clutter and information fatigue affect
                                our real minds, whether we're aware of it or
                                not. We want your new mind to be a break from
                                that. It's a clean slate where you can
                                deliberately choose what to save and consume. A
                                mental sigh of relief.
                            </p>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* Section 4: Tool as Means to an End */}
            <section className='w-full py-20 px-6 md:px-10 relative'>
                <GradientBackground
                    variant='yellow-peach'
                    intensity='light'
                    blur='lg'
                    pattern='waves'
                    className='absolute inset-0 z-0'
                />

                <div className='container mx-auto relative z-10 max-w-4xl pr-44'>
                    <ParallaxSection direction='up' speed={0.2}>
                        <div className='flex flex-col md:flex-row items-center mb-10'>
                            
                            <RichHeading
                                tag='h2'
                                type='accented'
                                accent='primary'
                                align='left'
                                className='text-3xl md:text-4xl'
                            >
                                Because a tool is just the means to an end, not
                                the end in itself.
                            </RichHeading>
                        </div>
                    </ParallaxSection>

                    <div className='prose prose-lg max-w-none'>
                        <FadeInUp delay={0.1}>
                            <p className='mb-6'>
                                We built mymind for doers and makers. For people
                                who are busy doing other things and simply need
                                a place to collect and remember what they care
                                about.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.2}>
                            <p className='mb-6'>
                                mymind doesn't interfere, doesn't bother and
                                doesn't ask to be maintained. It's meant to
                                serve you, as an extension of your mind. So you
                                can think about anything and everything except
                                the tool itself.
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.3}>
                            <p className='mb-10'>
                                Because that's all it is: A tool meant to help
                                you achieve something else. Those who like to
                                procrastinate with folders and unmaintainable
                                systems will find plenty of other apps to keep
                                them busy. mymind is for those who would rather
                                draw and write and build and dance and sing.
                            </p>
                        </FadeInUp>
                    </div>

                    <div className='flex justify-center'>
                        <PremiumButton
                            href='/videos'
                            variant='secondary'
                            size='lg'
                            icon={<ArrowRight size={16} />}
                            iconPosition='right'
                        >
                            See how it works
                        </PremiumButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
