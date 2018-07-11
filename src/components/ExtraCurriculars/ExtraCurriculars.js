import React from 'react';
import PropTypes from 'prop-types';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MdWork from 'react-icons/lib/md/work';
import MdMovie from 'react-icons/lib/md/movie';
import MdFilm from 'react-icons/lib/md/theaters';
import MdPeople from 'react-icons/lib/md/people';

import FlagIcon from 'react-flag-kit/lib/FlagIcon';

const ExtraCurriculars = () =>
    <div style={{ backgroundColor: '#ebebeb' }}>
        <div className='c-header'>Activities</div>
        <VerticalTimeline animate={false}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2015 - current"
                iconStyle={{ background: 'orange', color: '#fff' }}
                icon={<MdMovie />}
            >
                <h3 className="vertical-timeline-element-title">Performer and Instructor</h3>
                <h4 className="vertical-timeline-element-subtitle">Improvisation Theater</h4>
                <div className="vertical-timeline-element-subtitle">Hamburg, Germany <FlagIcon code="DE" /></div>
                <p>
                    Regular professional performer as part of an Improv Troupe.<br />
                    Instructor at improvisation workshops.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2017 - current"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Co-Owner</h3>
                <h4 className="vertical-timeline-element-subtitle">Kowalska Lakdawala GbR</h4>
                <div className="vertical-timeline-element-subtitle">Hamburg, Germany <FlagIcon code="DE" /></div>
                <p>
                    Ecommerce company built to sell products on Amazon and on a personal e-commerce store.<br />
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="March 2014 - February 2015 (1 year)"
                iconStyle={{ background: 'red', color: 'white' }}
                icon={<MdFilm />}
            >
                <h3 className="vertical-timeline-element-title">Volunteer</h3>
                <h4 className="vertical-timeline-element-subtitle">TIFF - Toronto International Film Festival</h4>
                <div className="vertical-timeline-element-subtitle">Toronto, Canada <FlagIcon code="CA" /></div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2013 - September 2015 (2 months)"
                iconStyle={{ background: 'yellow', color: 'black' }}
                icon={<MdPeople />}
            >
                <h3 className="vertical-timeline-element-title">Cultural Exchange Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">AIESEC</h4>
                <div className="vertical-timeline-element-subtitle">Tolyatti, Russia <FlagIcon code="RU" /></div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>;

ExtraCurriculars.propTypes = {};

export default ExtraCurriculars;