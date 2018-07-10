import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import FlagIcon from 'react-flag-kit/lib/FlagIcon';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
});

const Languages = props =>
    <div style={{margin: '0 0 4em 0'}}>
        <div className='c-header'>Languages</div>
        <div className={props.classes.root}>
            <List>
                <ListItem>
                    <Avatar>
                        <FlagIcon code="GB" />
                    </Avatar>
                    <ListItemText primary="English" secondary="Native proficiency" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <FlagIcon code="DE" />
                    </Avatar>
                    <ListItemText primary="German" secondary="Full professional proficiency - B2 Goethe Certification" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <FlagIcon code="IN" />
                    </Avatar>
                    <ListItemText primary="Hindi" secondary="Full professional proficiency" />
                </ListItem>
            </List>
        </div>
    </div>;

export default withStyles(styles)(Languages);