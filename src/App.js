import React from 'react';
import "./App.css";
import Child from './Component/Child';
import {TransactionProvider} from './transactionContext'
function App() {
  return (
    
    <TransactionProvider>
       <Child/>
       </TransactionProvider>
    
  );
}

export default App;
