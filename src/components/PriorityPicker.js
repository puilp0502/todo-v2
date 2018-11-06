import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './PriorityPicker.module.css';
import { makeDummyHandler } from '../utils';


const cx = classNames.bind(styles);

class PriorityPicker extends Component {
    render() {
        const { urgency, onUrgencyChange } = this.props;
        const urgency_list = [1, 2, 3].map(i => (
            <div key={i} className={cx('urgency', {active: urgency === i})} data-urgency={i} onClick={()=>onUrgencyChange(i)} />
        ))
        return (
            <div className={cx('picker')}>
                <div className={cx('header')}>
                    urgency:
                </div>
                <div className={cx('selection')}>
                    { urgency_list }
                </div>
            </div>
        )
    }
}
PriorityPicker.defaultProps = {
    urgency: 1,
    onUrgencyChange: makeDummyHandler('onUrgencyChange')
}
export default PriorityPicker;