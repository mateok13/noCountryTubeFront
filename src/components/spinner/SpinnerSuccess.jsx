import PropTypes from 'prop-types';
import './SpinnerSuccess.css';

function SpinnerSuccess({message}) {
    return (
        <>
            <div className='spinnerContainer'>
                <h1 className='spinnerSuccessText'>{message}</h1>
                <div className='spinnerSuccess'>
                    <svg className='progressRing' width='150' height='150'>
                        <circle
                            className='progressRingCircle'
                            stroke='#09fca7'
                            strokeWidth='8'
                            fill='transparent'
                            r='70'
                            cx='75'
                            cy='75'
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}

SpinnerSuccess.propTypes = {
    message: PropTypes.string.isRequired,
}

export default SpinnerSuccess;