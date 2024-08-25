import { useState } from 'react';
import { PLACE_DATA } from '../../api/mock_data';
import '../../../src/index.css';

// 👇 3
const toDateInputString = (date) => {
  // ISO String without the trailing 'Z' is fine 🙄
  // (toISOString returns something like 2020-12-05T14:15:74Z,
  // datetime-local HTML5 input elements expect 2020-12-05T14:15:74, without the (timezone) Z)
  //
  // the best thing about standards is that we have so many to chose from!
  if (!date) return null;
  if (typeof date !== Object) {
    date = new Date(date);
  }
  let asString = date.toISOString();
  return asString.substring(0, asString.indexOf('T'));
};

export default function TransactionForm({ onSaveTransaction }) { // 👈 5
  const [user, setUser] = useState(''); // 👈 1
  const [date, setDate] = useState(new Date()); // 👈 1
  const [place, setPlace] = useState('home'); // 👈 1
  const [amount, setAmount] = useState(0); // 👈 1

  // 👇 5
  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveTransaction(user, place, amount, date);
    setUser('');
    setDate(new Date());
    setPlace('home');
    setAmount(0);
  };

  return (
    <>
      <h2>Add transaction</h2>
      <form onSubmit={handleSubmit} className='w-50 mb-3 placelist'>{/* 👈 5 */}
        <div className='mb-3'>
          <label htmlFor='date' className='form-label'>
            Who
          </label>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            id='user'
            type='text'
            className='form-control'
            placeholder='user'
            required
          />
          {/* 👆 2 en 4 */}
        </div>
        <div className='mb-3'>
          <label htmlFor='date' className='form-label'>
            Date
          </label>
          <input
            value={toDateInputString(date)}
            onChange={(e) => setDate(new Date(e.target.value))}
            id='date'
            type='date'
            className='form-control'
            placeholder='date'
          />
          {/* 👆 2, 3 en 4 */}
        </div>
        <div className='mb-3'>
          <label htmlFor='places' className='form-label'>
            Place
          </label>
          <select
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            id='places'
            className='form-select'
            required
          >
            {/* 👆 2 en 4 */}
            <option defaultChecked value=''>
              -- Select a place --
            </option>
            {PLACE_DATA.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id='amount'
            type='number'
            className='form-control'
            required
          />
          {/* 👆 2 en 4 */}
        </div>
        <div className='clearfix'>
          <div className='btn-group float-end'>
            <button type='submit' className='btn btn-primary'>
              Add transaction
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
