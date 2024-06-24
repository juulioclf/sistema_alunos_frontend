import React, { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';



interface LayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
