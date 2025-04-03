import React, { useState } from 'react';

const Form2: React.FC = () => {
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('Beginner');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thanks ${name}, your experience level is: ${experience}. Message: "${message}"`);
    };

    return (
        <div>
            <h3>Interested in Skiing With Me?</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Experience Level:
                    <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Pro">Pro</option>
                    </select>
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me your favorite ski spot or when you want to go!"
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form2;
