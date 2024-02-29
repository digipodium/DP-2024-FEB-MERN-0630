import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/aboutus">About Us</Link>
      <Link href="/contact">Contact Us</Link>
      <h1>My React App</h1>
      <button>some button</button>
    </div>
  )
}

export default Home;