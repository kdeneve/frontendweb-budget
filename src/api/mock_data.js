const TRANSACTION_DATA = [
  
  {
    user: 'Benjamin',
    amount: 100,
    date: '2021-07-01T12:32:04.534Z',
    place: 'HoGent',
  },
  {
    user: 'Benjamin',
    amount: -200,
    date: '2021-07-01T12:32:04.534Z',
    place: 'Dranken Geers',
  },
  {
    user: 'Benjamin',
    amount: 1700,
    date: '2021-06-30T10:09:22.534Z',
    place: 'Loon',
  },
  {
    user: 'Benjamin',
    amount: -300,
    date: '2021-06-30T10:09:22.534Z',
    place: 'Kermis',
  },
];

const PLACE_DATA = [
  { id: 1, name: 'zarra', rating: 5 },
  { id: 4, name: 'hogent', rating: 1 },
  { id: 7, name: 'bar', rating: 0 },
]; // 👈 1

export { TRANSACTION_DATA, PLACE_DATA} ; // 👈 2
