import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    number: PropTypes.number,
    color: PropTypes.array
};

const defaultProps = {
    number: -1,
    color: [0, 0, 0]
};

class Display extends Component {
    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return (
            <div style={style}>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

export default Display;