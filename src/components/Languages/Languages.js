import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import FlagIcon from 'react-flag-kit/lib/FlagIcon';

const styles = theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
        },
        avatar: {
            width: '48px',
            height: '48px'
        }
    })
;

const Languages = props =>
    <div style={{ margin: '0 0 4em 0' }}>
        <div className='c-header'>Languages</div>
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
                                  secondary={<Typography type="body2" style={{ fontSize: '1em', color: 'rgba(0, 0, 0, 0.54)' }}>Full professional proficiency - B2 Goethe Certification</Typography>}
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
    </div>;

export default withStyles(styles)(Languages);