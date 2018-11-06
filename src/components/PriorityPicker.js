import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './PriorityPicker.module.css';

const cx = classNames.bind(styles);

class PriorityPicker extends Component {
    render() {
        return (
            <div className={cx('picker')}>
                <div className={cx('header')}>
                    urgency:
                </div>
                <div className={cx('selection')}>
                    <div className={cx('urgency')} data-urgency="1"/>
                    <div className={cx('urgency')} data-urgency="2"/>
                    <div className={cx('urgency')} data-urgency="3"/>
                </div>
            </div>
        )
    }
}

export default PriorityPicker;