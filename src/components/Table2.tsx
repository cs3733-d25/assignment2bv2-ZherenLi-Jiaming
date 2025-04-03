import React from 'react';

const Table2: React.FC = () => {
    return (
        <div>
            <h3>My Favorite Ski Resorts</h3>
            <table>
                <thead>
                    <tr>
                        <th>Resort</th>
                        <th>Location</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stowe Mountain</td>
                        <td>Vermont</td>
                        <td>★★★★★</td>
                    </tr>
                    <tr>
                        <td>Killington</td>
                        <td>Vermont</td>
                        <td>★★★★☆</td>
                    </tr>
                    <tr>
                        <td>Whiteface Mountain</td>
                        <td>New York</td>
                        <td>★★★★☆</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table2;
