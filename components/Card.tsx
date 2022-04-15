import React from 'react';
import styled from 'styled-components';

import { CardI, CategoryEnum, TagInfo } from '@models/card';

const Card = ({ title, category }: CardI) => {
  const matchBackgroundColor = (category: CategoryEnum) => {
    return TagInfo.filter((info) => info.tag === category)[0].color;
  };

  return (
    <CardWrap>
      <CategoryTag bgColor={matchBackgroundColor(category)}>{category}</CategoryTag>
      <p>{title}</p>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div`
  width: 100%;
  height: 15rem;
  padding: 1.5rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px 0, rgba(0, 0, 0, 0.1) 0 0 1px 0;
  border-radius: 1rem;

  cursor: pointer;
`;

const CategoryTag = styled.span<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0 1rem;
`;
