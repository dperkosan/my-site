'use client';

import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <header>
      logo
      <div>
        {/* server component into client component */}
        <HeaderLink />
      </div>
    </header>
  );
};

export default Header;
