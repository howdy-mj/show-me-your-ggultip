export interface CardI {
  title: string;
  category: CategoryEnum;
}

export enum CategoryEnum {
  LIFESTYLE = '생활',
  FOOD = '음식',
}

export const TagInfo = [
  {
    tag: CategoryEnum.LIFESTYLE,
    color: '#d4a017',
  },
  {
    tag: CategoryEnum.FOOD,
    color: '#dddddc',
  },
];
