import React from 'react';

import SEO from '@/components/atoms/SEO';
import HomeTemplate from '@/components/template/HomeTemplate';
import { withSSRGuest } from '@/utils/withSSRGuest';

const seoInfo = {
    title: 'Lol Training | Home',
    url: 'http://localhost:3000/',
    description: 'website description',
    siteName: 'Choaching for players',
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
    }
};

export default function Home() {
    return (
        <>
            <SEO SEOinformation={seoInfo} />
            <HomeTemplate />
        </>
    );
}

export const getServerSideProps = withSSRGuest(async () => {
    return {
        props: {}
    };
});
