import React from 'react';
import Navbar from '../pages/Navbar';

const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
            </div>
        </div>
    );
};

export default Homepage;
