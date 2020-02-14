import React from 'react';
import styles from '../CircleSelector/CircleSelector.module.css';

const CircleSelector = (props) => {
    return (
        <div className={'CircleSelector'}>
            <button onClick={() => props.handleButtonCircleSelection(1)} className={props.selectedButtonCircle === 1 ? 'CircleSelector selected' : 'CircleSelector'}>{props.selectedButtonCircle === 1 ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}</button>
            <button onClick={() => props.handleButtonCircleSelection(2)} className={props.selectedButtonCircle === 2 ? 'CircleSelector selected' : 'CircleSelector'}>{props.selectedButtonCircle === 2 ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}</button>
            <button onClick={() => props.handleButtonCircleSelection(3)} className={props.selectedButtonCircle === 3 ? 'CircleSelector selected' : 'CircleSelector'}>{props.selectedButtonCircle === 3 ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}</button>
            <button onClick={() => props.handleButtonCircleSelection(4)} className={props.selectedButtonCircle === 4 ? 'CircleSelector selected' : 'CircleSelector'}>{props.selectedButtonCircle === 4 ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}</button>
        </div>
    );
};

export default CircleSelector;