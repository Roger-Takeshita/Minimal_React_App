import React from 'react';
import styles from '../Circles/Circles.module.css';

const Circles = (props) => {
    return (
        <div className={'Circles'}>
            <div onClick={() => props.handleButtonCircleSelection(1)} className={props.selectedButtonCircle === 1 ? 'Circles selected' : 'Circles'}>{props.selectedButtonCircle === 1 ? '1S' : '1'}</div>
            <div onClick={() => props.handleButtonCircleSelection(2)} className={props.selectedButtonCircle === 2 ? 'Circles selected' : 'Circles'}>{props.selectedButtonCircle === 2 ? '2S' : '2'}</div>
            <div onClick={() => props.handleButtonCircleSelection(3)} className={props.selectedButtonCircle === 3 ? 'Circles selected' : 'Circles'}>{props.selectedButtonCircle === 3 ? '3S' : '3'}</div>
            <div onClick={() => props.handleButtonCircleSelection(4)} className={props.selectedButtonCircle === 4 ? 'Circles selected' : 'Circles'}>{props.selectedButtonCircle === 4 ? '4S' : '4'}</div>
        </div>
    );
};

export default Circles;