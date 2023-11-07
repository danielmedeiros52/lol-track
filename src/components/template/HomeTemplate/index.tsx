import React, { useEffect, useState } from 'react';

import ChampionCard from '@/components/template/Champions';
import Header from '@/components/organismis/Header';
import { getAllChampions } from '@/actions/riot';

const HomeTemplate = () => {
    const [champions, setChampions] = useState<any[]>([]);

    useEffect(() => {
        const loadChampions = async () => {
            try {
                const data = await getAllChampions();
                const championsArray = Object.values(data.data);
                setChampions(championsArray);
            } catch (error) {
                console.error("Failed to load champions:", error);
            }
        };

        loadChampions();
    }, []);

    console.log('champions', champions);
    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.isArray(champions) && champions.map((champion) => (
                        <ChampionCard key={champion.id} champion={champion} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeTemplate;
