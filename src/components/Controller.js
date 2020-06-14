import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func,
};

const defaultProps = {
    onPlus: () => console.warn('onPlus is not defined'),
    onSubtract: () => console.warn('onSubtract is not defined'),
    onRandomizeColor: () => console.warn('onRandomizeColor is not defined'),
};

class Controller extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Controller.propTypes = propTypes;
Controller.defaultProps = defaultProps;

export default Controller;