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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
