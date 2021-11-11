import Link from 'next/link';

const Button = ({
  children,
  href,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  onHover = 'hover:bg-transparent hover:text-primary',
}) => {
  return (
    <Link href={href}>
      <a
        className={[
          'inline-block border-[1px] border-primary px-6 py-1 rounded-full transition-colors ease-in-out duration-300',
          bgColor,
          textColor,
          onHover,
        ].join(' ')}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
