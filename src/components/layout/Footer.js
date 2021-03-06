import React from 'react';
import { navigate } from 'gatsby'; //import navigate from gatsby

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">We are always investigating new ways to improve tradiging with AI and other technologies to give us an edge.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#" onClick={() => navigate('/privacy')}>Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#" onClick={() => navigate('/privacy')}>Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://github.com/kyoungd/material-landing">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
