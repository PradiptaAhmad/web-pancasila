import React from 'react';
import img from '../assets/images/bengkulu.jpeg';
import bg from '../assets/images/background.jpg';
import Button from '../layout/Button';
import { Link } from 'react-scroll';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Set the height to full viewport height
    width: '100%', // Set the width to 100%
  };

  return (
    <div
      className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center justify-items-center"
      style={backgroundStyle}
    >
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-5xl font-semibold leading-tight text-center text-white ">
          Bengkulu
        </h2>
        <p className="text-lightText mt-5 text-white text-center m-5">
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Detal Page" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
