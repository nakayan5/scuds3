import React, { useState, useEffect } from 'react'
import { makeStyles,  } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { db } from '../firebase';
import HTMLReactParser from 'html-react-parser'


const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: "left"
    },
  }));

const OpinionDetail = () => {
    const classes = useStyles()
    const selector = useSelector(state => state);
    const path = selector.router.location.pathname;
    const id = path.split('/opinion/')[1]

    const returnCodeToBr = (text) => {
        if (text === '') {
            return text
        } else {
            return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
        }
    }

    const [opinion, setOpinion] = useState(null);

    useEffect(() => {
        db.collection('opinions').doc(id).get().then((snapshot) => {
            const data = snapshot.data()
            setOpinion(data)
        })
    }, [])


    return (
        <section className='c-section-wrapin'>
            {opinion && (
                <div className={classes.root}>
                    {returnCodeToBr(opinion.text)}
                </div>
            )}
        </section>
    )
}

export default OpinionDetail