import styled from 'styled-components';
import tw from 'twin.macro';


export const Container = styled.div.attrs({
  className: "max-w-xs w-full rounded overflow-hidden shadow-lg bg-white m-2",
})`
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
export const CardImage = styled.img.attrs({
    className:"w-full h-20 object-cover"
})`
//   width: 52px;
//   height: 52px;
//   border-radius: 50%;
`;

export const CardContainer = styled.div.attrs({
  className: "px-4 py-2",
})``;
export const CardTitle = styled.div.attrs({
  className: "font-bold text-lg mb-2",
})`
color: #000;
`;

export const CardDescription = styled.p.attrs({
  className: "text-gray-700 text-base",
})`
`;


export const TagContainer = styled.div.attrs({
  className: "px-4 pt-4 pb-2",
})`
`;

export const Tag = styled.span.attrs({
  className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2",
})`
`;

export const AttrContainer = styled.div.attrs({
  className: "px-4 pb-4",
})`
`;

export const Attribute = styled.span.attrs({
  className:"",
})`

padding: 0.25rem 0.5rem;
`;