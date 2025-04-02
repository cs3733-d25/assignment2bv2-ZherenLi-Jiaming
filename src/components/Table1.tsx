import React, { useState } from 'react';
import Form1 from './Form1';
import List1 from './List1';

const Table1: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);

    const addItem = (item: string) => {
        setItems([...items, item]);
    };

    return (
        <div>
            <h2>Basketball Hobby Tracker</h2>
            <Form1 onAddItem={addItem} />
            <h3>Table of Basketball Activities:</h3>
            <table border={1}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Activity</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h3>List of Basketball Items:</h3>
            <List1 items={items} />
        </div>
    );
};

export default Table1;
