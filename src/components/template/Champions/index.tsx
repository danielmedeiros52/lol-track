// ChampionCard.tsx
import React from 'react';
import { Container, CardImage, CardContainer, CardTitle, CardDescription, TagContainer, Tag, AttrContainer, Attribute } from './styles';
import { version } from 'os';


interface ChampionCardProps {
  champion: {
    id: string;
    name: string;
    title: string;
    blurb: string;
    version: string;
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
const url = process.env.BACKEND_URL;

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  const { name, title, blurb, image, tags, stats, version } = champion;

  return (
    <Container>
      <CardImage
        src={`${url + `/img/champion/` + image.full}`}
        alt={`Image of ${name}`}
      />
      <CardContainer>
        <CardTitle >{name + ` ` + title}</CardTitle>
        <CardDescription>{blurb}</CardDescription>
      </CardContainer>
      <TagContainer >
        {tags.map((tag) => (
          <Tag key={tag}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <AttrContainer >
        <Attribute>HP: {stats.hp}</Attribute>
        <Attribute>Attack Damage: {stats.attackdamage}</Attribute>
      </AttrContainer>
      <small className='text-xs font-semibold text-gray-700'>
        Patch Version:  {version}
      </small>
    </Container>
  );
};

export default ChampionCard;
