import React from 'react';
import { Spin, Icon } from 'antd';
import styles from './index.module.scss';

const LoadingFoodTypes = ({ size = "small" }) => {
    return (
        <div className={styles.parent}>
            <Spin spinning size={size} indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>} />
        </div>
    )
};

export default LoadingFoodTypes;