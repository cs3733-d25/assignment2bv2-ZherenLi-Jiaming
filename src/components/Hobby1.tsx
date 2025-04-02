import React from 'react';
import Table1 from './Table1';

const Hobby1: React.FC = () => {
    return (
        <div>
            <h2>My Hobby: Basketball 🏀</h2>
            <p>
                Basketball is not just a sport for me—it's a passion. I love the energy, the teamwork, and the thrill of making a perfect shot.
                Whether I'm playing with friends or watching an NBA game, basketball always gets me excited.
            </p>
            <img
                src='https://cdn.pixabay.com/photo/2022/04/09/15/10/basketball-7121617_1280.jpg'
                alt="Basketball court"
                style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '20px' }}
            />
            <Table1 />
        </div>
    );
};

export default Hobby1;