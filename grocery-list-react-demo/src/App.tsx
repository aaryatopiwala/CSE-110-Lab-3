import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

type GroceryItem = { name: string, isPurchased: boolean };

function App() {
    const [numRemainingItems, setNumRemainingItems] = useState(0);

    let [items, setItems] = useState([
        { name: "Apples", isPurchased: false },
        { name: "Bananas", isPurchased: false }
    ]);


    function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
        const checkbox: HTMLInputElement = e.target as HTMLInputElement;

        const itemName = checkbox.name;

        const itemIndex = items.findIndex((item) => item.name === itemName);
        items[itemIndex] = { name: itemName, isPurchased: checkbox.checked };

        const uncheckedItems = items.filter((item) => !item.isPurchased);
        const checkedItems = items.filter((item) => item.isPurchased);

        const newItems = uncheckedItems.concat(checkedItems);

        setItems(newItems);

        const diff = checkbox.checked ? 1 : -1;

        setNumRemainingItems(numRemainingItems + diff);
    }

    return (
        <div className="App">
            {/* <header className="App-header">
            </header> */}
            <div className="App-body">
                Items bought: {numRemainingItems}
                <form action=".">
                    <ol>
                        {items.map((item) => ListItem(item, handleCheckboxClick))}
                    </ol>
                </form>
            </div>
        </div>
    );
}


function ListItem(item: GroceryItem, changeHandler: ChangeEventHandler) {
    return (
        <li key={item.name}><input type="checkbox" onChange={changeHandler} checked={item.isPurchased} name={item.name} />{item.name}</li>
    )
}

export default App;
