import React from 'react';
import styled from 'styled-components';

import { Title } from '@components/Typo';
import Card from '@components/Card';
import { CardI, CategoryEnum } from '@models/card';

const cards: CardI[] = [
  {
    title: '콘센트 사는법',
    category: CategoryEnum.LIFESTYLE,
  },
  {
    title: '스벅 히든 메뉴',
    category: CategoryEnum.FOOD,
  },
  {
    title: '자동차 우회전 신규 법안',
    category: CategoryEnum.LIFESTYLE,
  },
  {
    title: '공차 숨겨진 꿀팁',
    category: CategoryEnum.FOOD,
  },
];

const Main = () => {
  return (
    <>
      <Title className="py-2">아무개의 꿀팁저장소</Title>
      <CardList>
        {cards.map((card) => (
          <Card key={card.title} title={card.title} category={card.category} />
        ))}
      </CardList>
    </>
  );
};

export default Main;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em 20px;
  place-items: center center;

  margin: 2rem;
`;
