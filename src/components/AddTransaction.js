import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const[text, setText]=useState();
    const[amount, setAmount] = useState();
    const { addTransaction } = useContext(GlobalContext);
    function onSubmit(e) {
        e.preventDefault();
        const initialState = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }
        addTransaction(initialState)
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." onChange={(e)=>setText(e.target.value)} value={text} />
                </div>
                <div className="htmlForm-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)} value={amount}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction