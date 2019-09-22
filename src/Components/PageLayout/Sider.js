import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Layout, Menu, Divider, Row, Col } from 'antd';
import Icon from 'Assets/Icons';
import LoadingFoodTypes from 'Elements/LoadingFoodTypes';
import { Link, withRouter } from 'react-router-dom';
import * as ActionCreator from 'Redux/actions/actionCreators';
import styles from './styles.module.scss';

const MenuItem = Menu.Item;
const { Sider } = Layout;

class FixedSider extends PureComponent {
    componentDidMount() {
        const {
            fetchFoodTypes,
            foodTypes,
        } = this.props;
        if (foodTypes.length === 0)
            fetchFoodTypes();
    }

    handleSelectType = params => {
        const { history } = this.props;
        history.push(`/foods/${params.key}`);
    }

    render() {
        const {
            loading,
            foodTypes,
            match: { params },
        } = this.props;
        const type = params.type;
        return (
            <Sider className={styles.sider}>
                <div className={styles.inlineDiv}>
                    <div className={styles.title}>Food Types</div>
                    <Divider dashed style={{ marginTop: 12 }}/>
                    <div className={styles.menu}>
                        {(loading || foodTypes.length === 0) ? (
                            <LoadingFoodTypes size="default" />
                        ) : (
                            <Menu
                                theme="dark"
                                mode="inline"
                                selectedKeys={[type]}
                                onSelect={this.handleSelectType}
                            >
                                {foodTypes.map(fT => (
                                    <MenuItem key={fT.key} className={styles.menuItem}>
                                        <Icon type={fT.icon} filled={type === fT.key ? 'yellowgreen' : 'yellow'}/>
                                        <span>{fT.name}</span>
                                    </MenuItem>
                                ))}
                            </Menu>
                        )}
                        
                    </div>
                </div>
            </Sider>
        )
    }
}

const mapStateFromProps = state => ({
    loading: state.loading['fetchFoodTypes'] || false,
    foodTypes: state.foodTypes,
});

const mapDispatchFromProps = dispatch => ({
    fetchFoodTypes: () => dispatch(ActionCreator.fetchFoodTypes()),
});

export default withRouter(connect(mapStateFromProps, mapDispatchFromProps)(FixedSider));