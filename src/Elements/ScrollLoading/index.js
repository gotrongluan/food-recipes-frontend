import React from 'react';
import { Spin, Icon } from 'antd';
import styles from './index.module.scss';

const ScrollLoading = ({ size = "small", tip }) => {
    return (
        <div className={styles.parent}>
            <Spin spinning size={size} tip={tip} indicator={<Icon type="build" spin theme="twoTone" twoToneColor="yellowgreen"/>} />
        </div>
    )
};

export default ScrollLoading;