import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';





const App = () => (
  <div className='container'>
    <div>
      <h1>Countries List</h1>
    </div>
  </div>
)




const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)