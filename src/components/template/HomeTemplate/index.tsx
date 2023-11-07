import React, { useEffect, useState } from 'react';

import ChampionCard from '@/components/template/Champions';
import Header from '@/components/organismis/Header';
import { getAllChampions } from '@/actions/riot';

const HomeTemplate = () => {
    const [champions, setChampions] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

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
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const filteredChampions = searchTerm
        ? champions.filter((champion) =>
            champion.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : champions;
    console.log('champions', champions);
    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar campeão..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-2 rounded-md text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredChampions.map((champion) => (
                        <ChampionCard key={champion.id} champion={champion} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HomeTemplate;
