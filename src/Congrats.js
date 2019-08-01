import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    
    return (
        <div data-test="component-congrats">
            {props.success && (
                <h1 data-test="congrats-message" className="alert alert-success">Congratulations, you guessed the word!</h1>
            )}
        </div>
    );
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;
