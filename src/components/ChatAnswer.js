import React from 'react';
import PropTypes from 'prop-types';
import './ChatAnswer.scss';

const ChatAnswer = props =>
    <div className='c-answer-bubble'>
        {props.children}
    </div>;

ChatAnswer.propTypes = {};

export default ChatAnswer;
