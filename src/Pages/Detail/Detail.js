import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row } from 'antd';
import LoadingPage from 'Elements/LoadingPage';
import { Scrollbars } from 'react-custom-scrollbars';
import * as ActionCreators from 'Redux/actions/actionCreators';
import styles from './Detail.module.scss';

class Detail extends React.PureComponent {
    componentDidMount() {
        const {
            currentFood,
            fetchCurrentFood,
            match: {
                params
            }
        } = this.props;
        if (!currentFood)
            fetchCurrentFood(params.foodId);
    }

    componentWillUnmount() {
        const { resetCurrentFood, saveError } = this.props;
        resetCurrentFood();
        saveError('fetchCurrentFood', false);
    }

    render() {
        const { loading, currentFood, fetchCurrentFoodError } = this.props;
        if (fetchCurrentFoodError)
            return <Redirect to={`/exception/${fetchCurrentFoodError}`}/>;
        if (loading || !currentFood)
            return <LoadingPage />;
        return (
            <Scrollbars style={{ height: '100vh', width: '100%' }}>
                <Row className={styles.detail}>
                    <Row className={styles.avatar}>
                        <img src={currentFood.avatar} alt="avatar" />
                    </Row>
                    <Row className={styles.name}>{currentFood.name}</Row>
                    <Row className={styles.ingredients}>
                        <Row className={styles.ingredientsTitle}>Ingredients:</Row>
                        <Row>
                            <ul style={{ listStyleType: 'none' }}>
                                {currentFood.ingredients.map(ingredient => (
                                    <li key={ingredient.name}>
                                        {`- ${ingredient.name} (${ingredient.amount} ${ingredient.unit})`}
                                    </li>
                                ))}
                            </ul>
                        </Row>
                    </Row>
                    <Row className={styles.steps}>
                        <Row className={styles.stepsTitle}>Steps:</Row>
                        <div dangerouslySetInnerHTML={{ __html: currentFood.steps }} />
                    </Row>
                    <Row className={styles.back}><Link to="/">&larr; Back to home</Link></Row>
                </Row>
            </Scrollbars> 
        )
    }
}

const mapStateToProps = state => ({
    currentFood: state.currentFood,
    fetchCurrentFoodError: state.error['fetchCurrentFood'] || false,
    loading: state.loading['fetchCurrentFood'] || false,
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentFood: (foodId) => dispatch(ActionCreators.fetchCurrentFood(foodId)),
    resetCurrentFood: () => dispatch(ActionCreators.resetCurrentFood()),
    saveError: (type, errorCode) => dispatch(ActionCreators.saveError(type, errorCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);