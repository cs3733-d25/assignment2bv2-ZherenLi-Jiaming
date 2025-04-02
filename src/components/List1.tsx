import React from 'react';
import './list.css';

interface List1Props {
    items: string[];
}

const List1: React.FC<List1Props> = ({ items }) => {
    return (
        <ul className="custom-list">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default List1;
