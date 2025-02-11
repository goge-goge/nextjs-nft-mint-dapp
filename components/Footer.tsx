import dynamic from 'next/dynamic';
import { FaHome, FaTwitter, FaMedium, FaShip } from 'react-icons/fa';

import Container from './Container';
import NextLink from './NextLink';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-8">
          <div>
            © {getCurrentYear()} {process.env.NEXT_PUBLIC_NFT_NAME}
          </div>

          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <ReactTooltip
              id="footer"
              place="top"
              type="dark"
              effect="solid"
              textColor="#e2e8f0"
            />
            <a
              href={process.env.NEXT_PUBLIC_SITE_URL}
              aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Home`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="Home"
              data-for="footer"
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <FaHome />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_TWITTER_URL}
              aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Twitter`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="Twitter"
              data-for="footer"
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <FaTwitter />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_MEDIUM_URL}
              aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Medium`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="Medium"
              data-for="footer"
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <FaMedium/>
            </a>
            <a
              href={process.env.NEXT_PUBLIC_OPENSEA_URL}
              aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on OpenSea`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="OpenSea"
              data-for="footer"
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <FaShip />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
