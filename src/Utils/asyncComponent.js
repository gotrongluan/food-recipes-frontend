import React from 'react';

const asyncComponent = (getComponent) => {
    return class extends React.Component {
        state = {
            component: null
        }
        async componentDidMount() {
            if (!this.state.component) {
                const module = await getComponent();
                this.setState({
                    component: module,
                });
            }
        }
        render() {
            const { component: C } = this.state;
            return C ? <C {...this.props} /> : null;
        }
    }
}
export const asyncComponentFromPath = pathComponent => asyncComponent(() => {
    return import(`Pages/${pathComponent}`).then(module => module.default);
});