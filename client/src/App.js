import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching data', error));
  }, []);

  return (
    <div className="App">
      <h1>Customer List</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.sno}>{customer.customer_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
