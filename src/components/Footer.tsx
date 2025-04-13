'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <footer className="bg-[#E6E6E6] py-8 mt-auto">
      <div className="container mx-auto px-4">
        {isContactPage ? null : (
          <div className="flex justify-center space-x-6 text-gray-600">
            <Link 
              href="mailto:amanb@terpmail.umd.edu"
              className="hover:text-gray-900 transition-colors"
            >
              Email
            </Link>
            <Link 
              href="https://drive.google.com/file/d/1EJgAM3xXs3qUktiNwHuKSjR0HQZM2Az2/view?usp=sharing"
              className="hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aman-bollam/"
              className="hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/Aman-Bollam"
              className="hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
} 