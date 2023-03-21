import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import useLocalStorage from '../hooks/useLocalStorage';
import useToggle from '../hooks/useToggle';


function ProductPage() {
  const { data, isLoading, isError } = useApi(
    'https://jsonplaceholder.typicode.com/todos',
  );

  const [storedValue, setValue, removeValue] = useLocalStorage("items", []);

  return (
    <div>
        <h1>Product Page</h1>
        <h2>Stored values in local storage</h2>
        <p>{JSON.stringify(storedValue)}</p>

        <h2>List of todos</h2>
        <button onClick={() => removeValue() }>Remove item</button>
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {data.map((item) => (
                <div key={item.id}>{item.title}
                <button onClick={() => setValue([... storedValue, item.title]) }>Store item</button>
                </div>

            ))}
        </div>
    </div>
  )
}



export default ProductPage;
