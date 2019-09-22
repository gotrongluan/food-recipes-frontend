import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import * as ActionCreators from 'Redux/actions/actionCreators';
import PageWithFullLayout from 'Components/PageWithFullLayout';
import Loading from 'Elements/LoadingPage';
import ScrollLoading from 'Elements/ScrollLoading';
import FoodRecipe from './FoodRecipe';
import styles from './List.module.scss';

const NumRows = 3;

class List extends React.PureComponent {
    componentDidMount() {
        const {
            match: { params },
            fetchFoods,
        } = this.props;
        fetchFoods(params.type);
    }

    componentWillUnmount() {
        const { saveError } = this.props;
        saveError('fetchFoods', false);
        saveError('scrollFoods', false);
    }

    handleUpdate = e => {
        const {
            scrollFoods,
            loading,
            scrollLoading,
            foodsParams,
        } = this.props;
        const { hasMore } = foodsParams;
        if (hasMore && !loading && !scrollLoading) {
            if (window.innerHeight >= e.scrollHeight) {
                scrollFoods();
            }
        }
    }

    handleScroll = e => {
        const {
            scrollFoods,
            loading,
            scrollLoading,
            foodsParams,
        } = this.props;
        const { hasMore } = foodsParams;
        if (e.srcElement.scrollHeight - e.srcElement.scrollTop === window.innerHeight)
            if (hasMore && !loading && !scrollLoading)
                scrollFoods();
    }

    render() {
        const { loading, scrollLoading, foods, foodsParams, fetchFoodsError, scrollFoodsError } = this.props;
        if (fetchFoodsError || scrollFoodsError)
            return <Redirect to={`/exception/${fetchFoodsError || scrollFoodsError}`} />;
        const data = _.chunk(foods, NumRows);
        return (
            <PageWithFullLayout handleScroll={this.handleScroll} handleUpdate={this.handleUpdate}>
                {loading || data.length === 0 ? (
                    <Loading />
                ) : (
                    <Row className={styles.foodsList}>
                        <Row className={styles.foodType}>{`Delicious dishes from ${foodsParams.type.name}`}</Row>
                        <Divider style={{ marginTop: 0, marginBottom: 35 }}/>
                        {data.map((rowFoods, i) => {
                            return (
                                <Row gutter={32} className={styles.foodsRow} key={i}>
                                    {rowFoods.map((food, j) => {
                                        return (
                                            <Col key={`${i}_${j}`} span={24 / NumRows} className={styles.foodItem}>
                                                <Link to={`/food/${food.id}`}><FoodRecipe food={food} /></Link>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            );
                        })}
                        <Row>{ scrollLoading && <ScrollLoading tip="Loading Recipes..." /> }</Row>
                    </Row>
                )}
            </PageWithFullLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading['fetchFoods'] || false,
    scrollLoading: state.loading['scrollFoods'] || false,
    foods: state.foods,
    foodsParams: state.foodsParams,
    fetchFoodsError: state.error['fetchFoods'] || false,
    scrollFoodsError: state.error['scrollFoods'] || false,
});

const mapDispatchToProps = dispatch => ({
    fetchFoods: type => dispatch(ActionCreators.fetchFoods(type)),
    scrollFoods: () => dispatch(ActionCreators.scrollFoods()),
    saveError: (type, errorCode) => dispatch(ActionCreators.saveError(type, errorCode)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));