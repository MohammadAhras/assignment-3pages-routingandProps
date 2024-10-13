'use client'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React from 'react';
import { useRouter } from 'next/navigation';

const  Home: React.FC= () => {
  const Router = useRouter()
  return (
    <div>
      <Navbar title='My Website' />
      <h1>Welcome to the Home Page</h1>
    
    <Footer/>
    </div>
  );
};

export default Home;
