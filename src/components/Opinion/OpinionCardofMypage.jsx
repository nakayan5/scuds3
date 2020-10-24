import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import {push} from 'connected-react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 90,
    marginBottom: 10,
  },
  media: {
      minWidth: 120, 
      cursor: 'pointer'
  },
  details: {
  },
  content: {
    textAlign: 'left'
  },
}));

// propsでopinionのid, textを受けとる
const OpinionCardofMypage = (props) =>  {
    const classes = useStyles();
    const dispatch = useDispatch()

    // const editOpinion = (id) => {
    //     dispatch(push('/put'));
    // };

    return (
        <Card className={classes.root} >
            <CardMedia onClick={() => dispatch(push('/opinion/' + props.id))}
                className={classes.media}
                image="/static/image/cards/no_image.png"
                title="avator"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        タイトル
                    </Typography>
                    <Typography component="p" variant="subtitle2" onClick={() => dispatch(push('/put/' + props.id))}>
                        編集
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component='p'>
                        {props.text}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                </div>
            </div>
        </Card>
    );
}

export default OpinionCardofMypage;
