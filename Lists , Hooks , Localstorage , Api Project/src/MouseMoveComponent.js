import React, { useState, useEffect } from 'react';
import './App.css';


const MouseMoveComponent = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ height: '600px', width: '100%', position: 'relative' }}>

            <div
                style={{
                    position: 'absolute',
                    top: position.y - 25,
                    left: position.x - 25,
                    width: 50,
                    height: 50,
                    backgroundColor: 'red',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
};

export default MouseMoveComponent;
