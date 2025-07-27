// src/components/Greeting.tsx
import React from 'react';

type GreetingProps = {
    name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h2>Hallo, {name}!</h2>;
};

export default Greeting;
