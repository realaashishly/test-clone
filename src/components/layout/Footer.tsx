import Link from "next/link";
import Image from "next/image";
import GradientBackground from "../ui/gradient-background";

const Footer = () => {
    return (
        <footer className='py-16 px-6 md:px-10'>
          <GradientBackground
                    variant='orange-pink'
                    intensity='medium'
                    blur='xl'
                    className='absolute inset-0 z-0'
                    animated={true}
                />
            <div className='container mx-auto'>
                
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                    <div className='md:col-span-1'>
                        <div className='flex items-center mb-6'>
                            <Image
                                src='/fz k s h tr (1).png'
                                alt='mymind logo'
                                width={28}
                                height={28}
                                className='mr-2'
                            />
                            <span className='font-louize text-mymind-dark'>
                                Korizen
                            </span>
                        </div>
                        <p className='text-mymind-gray text-sm mb-10'>
                            Enjoy your mind
                        </p>
                    </div>

                    <div className='md:col-span-1'>
                        <h3 className='font-nunito uppercase text-xs tracking-wider text-mymind-gray mb-4'>
                            See how it works
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/videos'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    mymind walkthroughs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/reviews'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    Why people love mymind
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/pricing'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    Our pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/videos'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    See how it works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/adhd'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    mymind & ADHD
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='md:col-span-1'>
                        <h3 className='font-nunito uppercase text-xs tracking-wider text-mymind-gray mb-4'>
                            Our Apps
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='https://apps.apple.com/us/app/mymind-extend-your-mind/id1520332347'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    iOS app
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://play.google.com/store/apps/details?id=com.mymind.access&ah=oIVxiLViPVHlzc0SrH49usBzYi0'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    Android app
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/browser-extensions'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    Browser extension
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://apps.apple.com/us/app/mymind-extend-your-mind/id1532801185?mt=12'
                                    className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                >
                                    MacOS app
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='md:col-span-1'>
                        <div className='mb-8'>
                            <h3 className='font-nunito uppercase text-xs tracking-wider text-mymind-gray mb-4'>
                                About us
                            </h3>
                            <ul className='space-y-2'>
                                <li>
                                    <Link
                                        href='/manifesto'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        Our manifesto
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/our-promise'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        Our promise
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-nunito uppercase text-xs tracking-wider text-mymind-gray mb-4'>
                                Help and Contact
                            </h3>
                            <ul className='space-y-2'>
                                <li>
                                    <Link
                                        href='https://twitter.com/mymind'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        @mymind on Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='https://mymind.helpscoutdocs.com/'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        Guides & contact form
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/videos'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        Video tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='https://access.mymind.com/signin'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        Sign in to mymind
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='https://access.mymind.com/'
                                        className='text-mymind-dark hover:text-primary text-sm transition-colors'
                                    >
                                        Create an account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border-t border-mymind-gray/10 mt-10 pt-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-sm text-mymind-gray mb-4 md:mb-0 capitalize'>
                            © korizen, Inc. 2025
                        </div>

                        <div className='text-sm text-mymind-gray mb-4 md:mb-0'>
                            Made with love from the PNW and New York City.
                        </div>

                        <div className='flex space-x-6'>
                            <Link
                                href='/terms'
                                className='text-sm text-mymind-gray hover:text-primary transition-colors'
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                href='/privacypolicy'
                                className='text-sm text-mymind-gray hover:text-primary transition-colors'
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href='/faq'
                                className='text-sm text-mymind-gray hover:text-primary transition-colors'
                            >
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
