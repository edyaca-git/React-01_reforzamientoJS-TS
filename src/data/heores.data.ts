interface Hero {
    id: number;
    name: string;
    ownerType: ownerType;
    ownerEnum: OwnerEnum;
}

type ownerType = 'DC' | 'Marvel';
export enum OwnerEnum {
    DC = 'DC',
    Marvel = 'Marvel'
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    ownerType: 'DC',
    ownerEnum: OwnerEnum.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    ownerType: 'Marvel',
    ownerEnum: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    ownerType: 'DC',
    ownerEnum: OwnerEnum.DC,
  },
  {
    id: 4,
    name: 'Flash',
    ownerType: 'DC',
    ownerEnum: OwnerEnum.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    ownerType: 'Marvel',
    ownerEnum: OwnerEnum.Marvel,
  },
];