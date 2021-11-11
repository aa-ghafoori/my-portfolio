import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import menuIcon from '../public/assets/hamburger-menu.svg';
import closeIcon from '../public/assets/close-menu.svg';
import NavItem from './nav-item';
import Button from './ui/button';
import { useState } from 'react';
import c from 'classnames';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navClickHandler = () => setNavOpen(!navOpen);

  return (
    <header className='fixed inset-x-0'>
      <div className=' py-4 shadow-md relative z-40 bg-white'>
        <div className='container flex justify-between items-center'>
          <FontAwesomeIcon icon={faCode} className='text-5xl text-primary cursor-pointer' />
          <nav className='hidden md:flex items-center'>
            <NavItem href='/'>About</NavItem>
            <NavItem href='/'>Skills</NavItem>
            <NavItem href='/'>Works</NavItem>
            <div className='pl-4'>
              <Button href='/'>Contact</Button>
            </div>
          </nav>
          <div className='md:hidden cursor-pointer'>
            <Image
              src={navOpen ? closeIcon : menuIcon}
              alt='portfolio logo'
              onClick={navClickHandler}
            />
          </div>
        </div>
      </div>
      <nav
        className={c(
          'flex flex-col items-center shadow-md md:hidden relative z-30 transition ease-in-out duration-700',
          {
            '-translate-y-96': !navOpen,
            'translate-x-0': navOpen,
          }
        )}
      >
        <NavItem href='/'>About</NavItem>
        <NavItem href='/'>Skills</NavItem>
        <NavItem href='/'>Works</NavItem>
        <div className='py-4'>
          <Button href='/'>Contact</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
