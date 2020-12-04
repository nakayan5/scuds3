import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {push} from 'connected-react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 90,
    marginBottom: 10,
  },
  media: {
      width: 150,
      minWidth: 120, 
  },
  details: {
  },
  content: {
    textAlign: 'left'
  },
}));

const OpinionCard = (props) =>  {
  　const classes = useStyles();
    const dispatch = useDispatch()
    
    return (
        <Card className={classes.root} onClick={() => dispatch(push('/opinion/' + props.id))}>
            <CardMedia
                className={classes.media}
                image="/static/image/cards/no_image.png"
                title="avator"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Titleです
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component='p'>
                        {props.text}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    {/* <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton> */}
                </div>

            </div>
        </Card>
    );
}

export default OpinionCard
