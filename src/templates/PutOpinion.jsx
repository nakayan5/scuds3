import React, {useCallback,useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {PrimaryButton} from '../components/UIkit/index'
import {saveOpinion} from '../reducks/opinion/operations'
import {getUserId} from '../reducks/users/selectors'
import { db } from '../firebase';


const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        flexDirection: 'columns'
    },
    textarea: {
        width: 800,
        height: 600,
        margin: '0 auto',
        display: 'block'
    },
    btn: {
        display: 'block',
        margin: 20,
    }
}));


const PutOpinion = () => {

    // URLを取得してsplitで変数:idを判定する
    let id = window.location.pathname.split('/put/edit')[1];
    if (id !== "") {
        id = id.split('/')[1]
    }


    const classes = useStyles()
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const useId = getUserId(state)

    const [text, setText] = useState('')
    const inputText = useCallback((event) => {
        setText(event.target.value)
    }, [setText])


    // 選択したopinionの詳細を表示する
    useEffect(() => {
        if (id !== '') {
            db.collection('opinion').doc(id).get().then((snapshot) => {
            })
        }
    }, [id])

    return (
        <div className='c-section-wrapin'>
            {/* <div className={classes.root}> */}
                <textarea name="" id="" cols="30" rows="10" onChange={inputText} className={classes.textarea}></textarea>
                <div className={classes.btn}>
                    <PrimaryButton label='scudsに投稿' onClick={() => dispatch(saveOpinion(text, useId))} />
                </div>
            {/* </div> */}
        </div>
    )
}

export default PutOpinion;