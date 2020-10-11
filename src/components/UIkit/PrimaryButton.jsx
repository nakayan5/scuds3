import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
    'button': {
        backgroundColor: '#4dd0e1',
        color: '0001',
        heigth: 48,
        fontSize: 16,
        marginButton: 16,
        width: 256,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        }
    }
}))

const PrimaryButton = (props) => {

    const classes = useStyles();

    return (
        <Button className={classes.button} variant='contained' onClick={() => props.onClick()} >
            {props.label}
        </Button>
    )
}

export default PrimaryButton;