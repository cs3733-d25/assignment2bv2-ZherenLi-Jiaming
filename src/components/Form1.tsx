import React, { useState } from 'react';

interface Form1Props {
    onAddItem: (item: string) => void;
}

const Form1: React.FC<Form1Props> = ({ onAddItem }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onAddItem(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add something related to basketball:
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form1;
