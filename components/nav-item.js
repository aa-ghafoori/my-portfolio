import Link from 'next/link';

const NavItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='inline-block py-4 px-4 nav-hover text-secondary'>{children}</a>
    </Link>
  );
};

export default NavItem;
