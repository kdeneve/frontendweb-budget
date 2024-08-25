// src/components/transactions/TransactionList.jsx
import { useState } from 'react'; // 👈 1
import Transaction from './Transaction';
import TransactionForm from './TransactionForm'; // 👈 3
import { TRANSACTION_DATA } from '../../api/mock_data';

export default function TransactionList() {
  const [transactions, setTransactions] = useState(TRANSACTION_DATA); // 👈 1

  // 👇 2
  const createTransaction = (user, place, amount, date) => {
    const newTransactions = [
      {
        user,
        place,
        amount,
        date: new Date(date),
      },
      ...transactions,
    ]; // newest first
    setTransactions(newTransactions);
    console.log('transactions', JSON.stringify(transactions));
    console.log('newTransactions', JSON.stringify(newTransactions));
  };

  return (
    <>
      <h1>Transactions</h1>
      <TransactionForm onSaveTransaction={createTransaction} /> {/* 👈 1 */}
      {transactions.map(
        (
          trans,
          index // 👈 1
        ) => (
          <Transaction {...trans} key={index} />
        )
      )}
    </>
  );
}
