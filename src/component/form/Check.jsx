import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

const Check = props => (
    <div>
        <label>
            <input
                name={props.name}
                type={props.type}
                onChange={props.onChange}
                checked={props.checked}
            />
            {props.label ? props.label : props.name}
        </label>
    </div>
);

Check.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
};

export default connect(
    (state, props) => ({
        checked: state[props.name]
    })
)(Check);