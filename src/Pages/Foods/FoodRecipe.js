import React from 'react';
import { Card } from 'antd';
import moment from 'moment'
import styles from './FoodRecipe.module.scss';

const { Meta } = Card;

export default ({ food }) => {
    return (
        <Card
            hoverable
            style={{ width: '100%', borderRadius: '4px' }}
            cover={<img alt="food-avatar" src={food.avatar} style={{ width: '100%', height: 260 }} />}
        >
            <Meta title={<span style={{ fontSize: 21, fontWeight: 'bold', color: 'yellowgreen' }}>{food.name}</span>} description={`Published at ${moment(food.createdAt).format('DD/MM/YYYY')}`} />
        </Card>
    );
};