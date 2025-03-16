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
                
                

                <div className='border-t border-mymind-gray/10 mt-10 pt-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-sm text-mymind-gray mb-4 md:mb-0 capitalize'>
                            © korizen, 2025
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
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
