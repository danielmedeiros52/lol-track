import styled from 'styled-components';

export const CardImage = styled.img.attrs({
  className: "w-full object-cover"
})`
  height: 200px; 
`;
export const CardContainer = styled.div.attrs({
  className: "px-6 py-4",
})``;

export const CardTitle = styled.h2.attrs({
  className: "font-bold text-xl mb-2 text-gray-900",
})``;


export const CardDescription = styled.p.attrs({
  className: "text-gray-700 text-sm",
})`
  height: 5.6em; 
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const TagContainer = styled.div.attrs({
  className: "px-6 pt-4 pb-2 flex flex-wrap",
})``;

export const Tag = styled.span.attrs({
  className: "bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2",
})``;

export const Section = styled.section.attrs({
  className: "px-6 py-2",
})`
  &:first-of-type {
    padding-top: 0;
  }
  &:last-of-type {
    padding-bottom: 0;
  }
`;

export const SectionTitle = styled.h4.attrs({
  className: "text-md font-semibold text-gray-800 my-2",
})``;

export const AttrContainer = styled.dl.attrs({
  className: "grid grid-cols-2 gap-x-4 gap-y-2",
})``;
;

export const Attribute = styled.div.attrs({
  className: "text-xs font-medium text-gray-700",
})`
    & + & {
    margin-top: 0.25rem;
  }

  dt {
    display: inline;
    font-weight: 600;
  }

  dd {
    display: inline;
    margin-left: 0.25rem;
  }

`;
export const PatchVersion = styled.small.attrs({
  className: "absolute text-xs font-semibold",
})`
  bottom: 0.5rem;
  right: 0.5rem;
  color: rgba(0, 0, 0, 0.4); 
  z-index: 10;
`;
export const Card = styled.div.attrs({
  className: "relative m-4 rounded-lg shadow-lg my-4 mx-2 overflow-hidden max-w-xs w-full ",
})`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  width: 100%;
  height: 500px; 
  perspective: 1000px;
`;

export const CardInner = styled.div.attrs({
  className: "rounded-lg shadow-lg bg-white",
})`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  
  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div.attrs({
  className: "absolute top-0 left-0 w-full h-full rounded-lg",
})`
  backface-visibility: hidden;
`;

export const CardBack = styled.div.attrs({
  className: "absolute top-0 left-0 w-full h-full rounded-lg",
})`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;