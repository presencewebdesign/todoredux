import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

const Input = props => (
    <div>
        <input
            name={props.name}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            />
        {/* {props.state.errors[props.name] ? <p style={{ color: 'red' }}>{props.state.errorMessages[props.name]}</p> : null} */}
        </div>
);
Input.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
};

export default connect(
    (state, props) => ({
        value: state[props.name],
    }),
)(Input);
