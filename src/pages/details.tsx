import React from 'react';

import SEO from '@/components/atoms/SEO';
import { getAllChampions } from '@/actions/riot';
import ChampionCard from '@/components/template/Champions';
const seoInfo = {
  title: 'LoL | Home',
  url: 'http://localhost:3000/',
  description: 'website description',
  siteName: 'Leadership for Executives',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
};

const Home = ({ data }) => {
  const champions = Object.values(data.data);
  console.log(champions)

  return (
    <>
      <SEO SEOinformation={seoInfo} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {champions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getAllChampions();
  return { props: { data } };
}

export default Home;

