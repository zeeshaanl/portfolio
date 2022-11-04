import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {FlagIcon} from 'react-flag-kit';
import jsLogo from '../../../static/img/jsLogo.svg'
import reactLogo from '../../../static/img/reactLogo.svg'
import nodejsLogo from '../../../static/img/nodejsLogo.svg'
import awsLogo from '../../../static/img/awsLogo.png'
import firebaseLogo from '../../../static/img/firebaseLogo.png'
import typescriptLogo from '../../../static/img/typescriptLogo.png'
import expressLogo from '../../../static/img/expressLogo.png'

import './Languages.scss'
import SkillCard from "../SkillCard/SkillCard";

const styles = theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
        },
        avatar: {
            backgroundColor: '#f5f5f5',
            width: '48px',
            height: '48px'
        }
    })
;

const Languages = props =>
    <div style={{ margin: '0 0 4em 0' }}>
        <div className='c-header'>Skills</div>
        <div>
            <h3 className='c-skills__header u-text-center'>Favourite Tech</h3>
            <div className='c-skills__list'>
                <SkillCard imageUrl={jsLogo} skillName="Javascript"/>
                <SkillCard imageUrl={typescriptLogo} skillName="Typescript"/>
                <SkillCard imageUrl={reactLogo} skillName="React.js"/>
                <SkillCard imageUrl={nodejsLogo} skillName="Node.js"/>
                <SkillCard imageUrl={awsLogo} skillName="Amazon Web Services"/>
                <SkillCard imageUrl={firebaseLogo} skillName="Firebase"/>
            </div>
            <div className='c-skills-paragraph u-text-center'>
                <p>I believe in being <b>customer focused</b> and <b>data driven.</b></p>
                <p>I love building products that solve challenging problems.</p>
                <p>I keep an open mind about new languages, frameworks and concepts.</p>
            </div>
        </div>
        <div className='c-languages'>
            <h3 className='c-skills__header u-text-center'>Conventional Languages</h3>
            <div className={props.classes.root}>
                <List>
                    <ListItem>
                        <Avatar className={props.classes.avatar}>
                            <FlagIcon size={36} code="GB" />
                        </Avatar>
                        <ListItemText disableTypography
                                      primary={<Typography type="body2" style={{ fontSize: '1.2em' }}>English</Typography>}
                                      secondary={<Typography type="body2" style={{ fontSize: '1em', color: 'rgba(0, 0, 0, 0.54)' }}>Native Proficiency</Typography>}
                        />
                    </ListItem>
                    <ListItem>
                        <Avatar className={props.classes.avatar}>
                            <FlagIcon size={36} code="DE" />
                        </Avatar>
                        <ListItemText disableTypography
                                      primary={<Typography type="body2" style={{ fontSize: '1.2em' }}>German</Typography>}
                                      secondary={<Typography type="body2" style={{ fontSize: '1em', color: 'rgba(0, 0, 0, 0.54)' }}>Full professional proficiency
                                          <br />(Goethe-C1)</Typography>}
                        />
                    </ListItem>
                    <ListItem>
                        <Avatar className={props.classes.avatar}>
                            <FlagIcon size={36} code="IN" />
                        </Avatar>
                        <ListItemText disableTypography
                                      primary={<Typography type="body2" style={{ fontSize: '1.2em' }}>Hindi</Typography>}
                                      secondary={<Typography type="body2" style={{ fontSize: '1em', color: 'rgba(0, 0, 0, 0.54)' }}>Full professional proficiency</Typography>}
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    </div>;

export default withStyles(styles)(Languages);
