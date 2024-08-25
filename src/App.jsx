// src/App.jsx
import TransactionList from './components/transactions/TransactionList'; // 👈 1
import PlacesList from './components/places/PlacesList';

function App() {
  return (
    <div>
      <TransactionList /> {/* 👈 2 */}
      <PlacesList />
    </div>
  );
}
export default App;
