import Link from "next/link";

const Footer = () => {
    return (
        <footer className='py-16 px-6 md:px-10 bg-white'>
            <div className='container mx-auto'>
                <div className='border-t border-mymind-gray/10 mt-10 pt-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='text-sm text-mymind-gray mb-4 md:mb-0 capitalize'>
                            © korizen, 2025
                        </div>
                        <div className='flex space-x-6 text-sm text-mymind-gray'>
                            <Link
                                href='/contact-us'
                                className='hover:text-zinc-500 transition-colors duration-200'
                            >
                                Contact Us
                            </Link>
                            <Link
                                href='/privacy-policy'
                                className='hover:text-zinc-500 transition-colors duration-200'
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href='/terms-and-conditions'
                                className='hover:text-zinc-500 transition-colors duration-200'
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
