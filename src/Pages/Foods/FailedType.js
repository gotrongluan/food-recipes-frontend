import React from 'react';
import { Link } from 'react-router-dom';
import Swing from 'react-reveal/Swing';
import LightSpeed from 'react-reveal/LightSpeed';
import styles from './FailedType.module.scss';

class FailedType extends React.PureComponent {

    render() {
        return (
            <div className={styles.parent}>
                <div className={styles.inlineDiv}>
                    <Swing><div className={styles.oops}>Oops!</div></Swing>
                    <LightSpeed left><div className={styles.errorMessage}>Your food type is invalid</div></LightSpeed>
                    <LightSpeed right><div className={styles.backToHome}><Link to="/">&larr; Home Page</Link></div></LightSpeed>
                </div>
            </div>
        )
    }
}

export default FailedType;