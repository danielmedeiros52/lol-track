// ChampionCard.tsx
import React from 'react';

interface ChampionCardProps {
  champion: {
    id: string;
    name: string;
    title: string;
    blurb: string;
    image: {
      full: string;
    };
    tags: string[];
    stats: {
      hp: number;
      attackdamage: number;
    };
  };
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  const { name, title, blurb, image, tags, stats } = champion;

  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg bg-white m-2">
      <img
        className="w-full h-40 object-cover"
        src={`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${image.full}`}
        alt={`Image of ${name}`}
      />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2">{name}</div>
        <p className="text-gray-700 text-base">{blurb}</p>
      </div>
      <div className="px-4 pt-4 pb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-4 pb-4">
        <p className="text-xs font-semibold text-gray-700">HP: {stats.hp}</p>
        <p className="text-xs font-semibold text-gray-700">Attack Damage: {stats.attackdamage}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
