import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MdWork from 'react-icons/lib/md/work';
import MdSchool from 'react-icons/lib/md/school';

import FlagIcon from 'react-flag-kit/lib/FlagIcon';

import './Experience.scss';

const Experience = () =>
    <div style={{ backgroundColor: '#ebebeb' }}>
        <div className='c-header'>Work Experience and Education</div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2015 - June 2018 (2 years and 10 months)"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Happycar</h4>
                <div className="vertical-timeline-element-subtitle">Hamburg, Germany <FlagIcon code="DE" /></div>
                <p>
                    Worked on a wide range of projects in the frontend and backend. Specialised in building
                    Single Page Applications with React.js.<br />
                    Javascript | React.js | Node.js | HTML/CSS | AWS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="March 2015 - August 2015 (6 months)"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Front End Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Argo 22</h4>
                <div className="vertical-timeline-element-subtitle">České Budějovice, Czech Republic <FlagIcon code="CZ" /></div>
                <p>
                    Worked on front end projects including dashboards and other frontend components for clients of the company.<br />
                    Javascript | JQuery | HTML/CSS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="March 2014 - February 2015 (1 year)"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Bookmyshow</h4>
                <div className="vertical-timeline-element-subtitle">Mumbai, India <FlagIcon code="IN" /></div>
                <p>
                    Development work for high a high traffic Indian e-ticketing website. <br />
                    PHP | Javascript | JQuery | HTML/CSS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2009-2013 (4 years)"
                iconStyle={{ background: 'rgba(16, 155, 8, 1)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">BTech - Computer Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle">Mukesh Patel School of Technology</h4>
                <div className="vertical-timeline-element-subtitle">Mumbai, India <FlagIcon code="IN" /></div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>;

export default Experience;