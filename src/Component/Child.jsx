import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { TransactionContext } from "../transactionContext";
const Child = () => {
  const [newDesc, setDesc] = useState();
  const [newAmount, setAmount] = useState();
  let { transactions, addTransaction } = useContext(TransactionContext);
  const handleAddition = (e) => {
    e.preventDefault();
    if(Number(newAmount)===0){
      alert("Please enter valid number")
      return false;
    }
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setDesc(' ')
    setAmount(0)
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount;
      }
     
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += transactions[i].amount;
      }
    }
    return expense;
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>

      <h3>
        Your Balance <br />
       {getIncome() + getExpense() }
      </h3>
      <div className="expense-container">
        <h3>
          INCOME
          <br />
          {getIncome()}
        </h3>
        <h3>
          Expense
          <br />
          {getExpense()}
        </h3>
      </div>
      <h3>Histroy</h3>
      <hr />
      <ul className="tranaction-list">
        {transactions.map((item, ind) => {
          return (
            <li key={ind}>
              <span>{item.desc}</span>
              <span>{item.amount}</span>
            </li>
          );
        })}
      </ul>
      <h3>Add New Transaction</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description
          <br />
          <input
          value={newDesc}
            type="text"
            required
            onChange={(ev) => setDesc(ev.target.value)}
          />
        </label>
        <br />
        <label>
          Enter Amount
          <br />
          <input
          value={newAmount}
            type="number"
            required
            onChange={(ev) => setAmount(ev.target.value)}
          />
        </label>
        <br />
        <br />

        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
};

export default Child;
