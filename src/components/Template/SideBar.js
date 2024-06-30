import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Maia Ann Talbert</h2>
        <p><a href="mailto:maiyuri.artist@gmail.com">maiyuri.artist@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      {/* <p>Hi, I&apos;m Maia Ann Talbert. I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni,
        and the VP of Engineering at <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>.
      </p> */}
      <p>Hi! My name is Maia, and I&apos;m a recent Purdue graduate (B.Sc. in planetary sciences),
        as well as a self-taught artist (check out my galley and link to Etsy store here) and indie
        musician(you can listen here on Spotify, as well as most streaming platforms). Currently,
        my main goal for this website is to promote my art business as I&apos;m starting out :&#41;
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Maia Ann Talbert <Link to="/">MaiaAnn.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
