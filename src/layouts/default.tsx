import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";

import { ZikaLogo, GithubIcon, LinkedInIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import NavbarMain from "@/components/navbar";

const socials = [
  {
    logo: <GithubIcon />,
    href: 'https://github.com/Sharkfin07',
    alt: 'GitHub Logo',
  },
  {
    logo: <LinkedInIcon />,
    href: 'www.linkedin.com/in/mohammad-zidane-kurnianto-651621378',
    alt: 'LinkedIn Logo',
  },
  {
    logo: <InstagramIcon />,
    href: 'https://www.instagram.com/mohzidane_k/',
    alt: 'Instagram Logo',
  },
  {
    logo: <YoutubeIcon />,
    href: 'https://www.youtube.com/@saya-zika',
    alt: 'Youtube Logo',
  }
];

const socialElements = socials.map((social, index) => {
  return (
    <Button
      key={index}
      as={Link}
      href={social.href}
      isIconOnly
      variant="light"
      className="opacity-40 hover:opacity-100 scale-90 md:size-[50px]"
    >
      {social.logo}
    </Button>
  );
});

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <NavbarMain />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-1">
        {children}
      </main>
      <footer className="w-full px-5 flex flex-col items-center justify-center py-5 my-8 bg-gray-200 dark:bg-gray-950 rounded-t-lg shadow-2xl">
        <div className="flex items-start justify-evenly w-full">
          <div className="flex align-middle justify-start flex-1/2 gap-2 opacity-40">
            <ZikaLogo />
            <span className="font-instrument-serif italic flex items-center justify-center text-xl md:text-3xl md:ml-1">zikapedia</span>
          </div>
          <div className="flex gap-1 items-center align-middle">
            {socialElements}
          </div>
        </div>
        <Divider className="my-5" />
        <div>
          <span className="font-instrument-serif opacity-40 md:text-xl">
            &copy; {new Date().getFullYear()} Mohammad Zidane Kurnianto. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
