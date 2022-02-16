import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sing = transaction.amount > 0 ? "+" : "-"; 

    return (
        <div>
            <li className={transaction.amount > 0 ? "plus" :"minus"}>
                {transaction.text}<span>{sing}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
            </li>
        </div>
    )
}

export default Transaction