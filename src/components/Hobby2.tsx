import React from 'react';
import List2 from './List2';
import Table2 from './Table2';
import Form2 from './Form2';

const Hobby2: React.FC = () => {
    return (
        <div>
            <h2>My Hobby: Skiing </h2>
            <p>
            I love skiing because it combines speed, nature, and freedom. There's something amazing about gliding over fresh snow, surrounded by mountain views and crisp air.
            </p>
            <img
                src="https://media.istockphoto.com/id/2165025120/photo/skier-skis-down-slope-through-fresh-powder-snow.jpg?s=612x612&w=is&k=20&c=YVrtqNIGalsbvaT8r5DtN5A0aZyyUwbULvbR-f2xP-o="
                alt="Skier skiing through fresh powder"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '20px' }}
            />

            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
};

export default Hobby2;
