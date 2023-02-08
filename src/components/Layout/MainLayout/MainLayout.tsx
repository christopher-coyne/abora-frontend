import React from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import { Content } from './styles';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
}
