import React,{ useReducer } from "react";
import { createContext } from "react";
import transactionReducer from './transReducer'
const initialtransaction = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
    { amount: 200, desc: "ssd" }

  ];
  export const TransactionContext=createContext(initialtransaction);
  export const TransactionProvider=({children})=>{
    let[state, dispatch]=useReducer(transactionReducer, initialtransaction);
    function addTransaction(transobj){
        dispatch({
            type:"ADD",
            payload:{
                amount:transobj.amount,
                desc:transobj.desc
            }
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction
        }}>
           {children}
        </TransactionContext.Provider>
    )


  }