import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import './SkillCard.scss';

const SkillCard = ({imageUrl, skillName}) =>
    <div className='c-skillcard'>
        <img data-tip={skillName} className="skillcard-image" src={imageUrl}></img>
        <ReactTooltip place="top" type="dark" effect="float"/>
        {/*<span className="skillcard-text">{skillName}</span>*/}
    </div>;

SkillCard.propTypes = {};

export default SkillCard;
