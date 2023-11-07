// ChampionCard.tsx
import React, { useState } from 'react';
import {
  CardImage, CardContainer, CardTitle, CardDescription, TagContainer, Tag, AttrContainer, Attribute, Section, SectionTitle, PatchVersion,
  Card,
  CardInner,
  CardFront,
  CardBack,
} from './styles';

// https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/loading/Aatrox_0
// http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
interface ChampionCardProps {
  champion: {
    id: string;
    name: string;
    title: string;
    blurb: string;
    version: string;
    tags: string[];
    stats: {
      hp: number;
      attackdamage: number;
      armor: number;
      armorperlevel: number;
      attackdamageperlevel: number;
      attackrange: number;
      attackspeed: number;
      attackspeedperlevel: number;
      crit: number;
      critperlevel: number;
      hpregen: number;
      hpregenperlevel: number;
      movespeed: number;
      mp: number;
      mpperlevel: number;
      mpregen: number;
      mpregenperlevel: number;
      spellblock: number;
      spellblockperlevel: number;
    };
  };
}
const url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  const { name, title, blurb, id, tags, stats, version } = champion;
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card onClick={handleFlip}>
      <CardInner className={isFlipped ? 'flipped' : ''}>
        <CardFront>
          <CardImage src={`${url + id + `_0.jpg`}`} alt={`Image of ${name}`} />
          <CardContainer>
            <CardTitle>{name} - {title}</CardTitle>
            <CardDescription>{blurb}</CardDescription>
          </CardContainer>
          <TagContainer>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
          <PatchVersion>
            Patch Version: {version}
          </PatchVersion>
        </CardFront>
        <CardBack>
          <AttrContainer>
            <Section>
              <SectionTitle>Atributos Básicos</SectionTitle>
              <Attribute><dt>HP</dt> <dd>{stats.hp}</dd></Attribute>
              <Attribute><dt>MP</dt> <dd>{stats.mp}</dd></Attribute>
              <Attribute><dt>Move Speed</dt><dd>{stats.movespeed}</dd></Attribute>
              <Attribute><dt>Armor</dt><dd>{stats.armor}</dd></Attribute>
              <Attribute><dt>Spell Block</dt><dd>{stats.spellblock}</dd></Attribute>
              <Attribute><dt>Attack Damage</dt><dd>{stats.attackdamage}</dd></Attribute>
              <Attribute><dt>Atk Range</dt><dd>{stats.attackrange}</dd></Attribute>
              <Attribute><dt>Atk Speed</dt><dd>{stats.attackspeed}</dd></Attribute>
              <Attribute><dt>Crit</dt><dd>{stats.crit}</dd></Attribute>

            </Section>
            <Section>
              <SectionTitle>Regeneração</SectionTitle>
              <Attribute><dt>HP Regen</dt><dd>{stats.hpregen}</dd></Attribute>
              <Attribute><dt>MP Regen</dt><dd>{stats.mpregen}</dd></Attribute>
            </Section>
            <Section>
              <SectionTitle>Por Nível</SectionTitle>
              <Attribute><dt>HP Regen / Lvl</dt><dd>{stats.hpregenperlevel}</dd></Attribute>
              <Attribute><dt>MP Per / Lvl</dt><dd>{stats.mpperlevel}</dd></Attribute>
              <Attribute><dt>MP Regen / Lvl</dt><dd>{stats.mpregenperlevel}</dd></Attribute>
              <Attribute><dt>Armor / Lvl</dt><dd>{stats.armorperlevel}</dd></Attribute>
              <Attribute><dt>Spell Block / Lvl</dt><dd>{stats.spellblockperlevel}</dd></Attribute>
              <Attribute><dt>Atk Damage / Lvl</dt><dd>{stats.attackdamageperlevel}</dd></Attribute>
              <Attribute><dt>Atk Speed / Lvl</dt><dd>{stats.attackspeedperlevel}</dd></Attribute>
              <Attribute><dt>Crit / Lvl</dt><dd>{stats.critperlevel}</dd></Attribute>
            </Section>

          </AttrContainer>
        </CardBack>

      </CardInner>
    </Card>
  );
};

export default ChampionCard;
