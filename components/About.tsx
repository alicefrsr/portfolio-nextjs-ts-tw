'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[50rem] text-center leading-7 sm:mb-40 py-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        In a previous life I was a <strong>film editor</strong> based in London
        for 20 years, working on TV & feature documentaries, music promos,
        corporate videos, commercials, 2D/3D animation and VFX editing. I left
        after Brexit in pursuit of new horizons and sailing adventures, which
        led me to the Côte d&#39;Azur in France, the Costa Brava and Mallorca in
        Spain, juggling short editing contracts with my regular clients back in
        London during the winter, with working as a
        <strong> deck/stew, crew cook </strong> or
        <strong> junior engineer </strong>
        on private superyachts during the summer in the Mediterranean
        (2017-2020).
      </p>
      <p>
        As the world shut down during the pandemic in 2020, it was a chance to
        explore what <strong>programming</strong> was all about. Two months of
        Python during lockdown got me hooked, and I got sucked into the rabbit
        hole of all things web. Today I just build stuff for the web and add to
        my skillset every day. My focus is on frontend and I'm interest in web
        accessibility.
      </p>
    </motion.section>
  );
}
