import React from 'react';
import Beef from './Beef';
import Chicken from './Chicken';
import Shrimp from './Shrimp';
import Pork from './Pork';
import Fish from './Fish';
import All from './All';

export default ({ type, ...rest }) => {
    const mapTypeToComponent = {
        all: All,
        beef: Beef,
        chicken: Chicken,
        shrimp: Shrimp,
        pork: Pork,
        fish: Fish,
    };
    const C = mapTypeToComponent[type] || null;
    return C ? <C {...rest}/> : null;
}