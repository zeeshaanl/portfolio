import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaEnvelope from 'react-icons/lib/fa/envelope';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1em'
    },
});

const Contact = props =>
    <div style={{ margin: '0 0 4em 0' }}>
        <div className='c-header'>Find Me</div>
        <div className={props.classes.root}>
            <List>
                <ListItem button onClick={() => window.open('https://github.com/zeeshaanl', '_blank')}>
                    <ListItemIcon>
                        <FaGithub />
                    </ListItemIcon>
                    <ListItemText primary="Github" />
                </ListItem>
                <ListItem button onClick={() => window.open('https://www.linkedin.com/in/zeeshaan-lakdawala-2b8b712b/', '_blank')}>
                    <ListItemIcon>
                        <FaLinkedin />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItem>

                <ListItem button onClick={() => window.open('https://www.facebook.com/zeeshaan.lakdawala', '_blank')}>
                    <ListItemIcon>
                        <FaFacebook />
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                </ListItem>

                <ListItem button onClick={() => window.location.href='mailto:zeeshaanl@gmail.com'}>
                    <ListItemIcon>
                        <FaEnvelope />
                    </ListItemIcon>
                    <ListItemText primary="zeeshaanl@gmail.com" />
                </ListItem>
            </List>
        </div>
    </div>;

export default withStyles(styles)(Contact);