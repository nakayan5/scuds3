import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles} from '@material-ui/core/styles';
import {TextInput} from '../components/UIkit/index'
import {PrimaryButton} from '../components/UIkit/index'
import {getUserId} from '../reducks/users/selectors'
import {changeProfile} from '../reducks/users/operations'


const useStyles = makeStyles((theme) => ({
    root: {
     
    },
}));

const ChangeProfile = () => {
    const classes = useStyles()
    const selector = useSelector(state => state)
    const uid = getUserId(selector)
    const [name, setName] = useState(""),
          [self_introduction, setSelf_introduction] = useState(""),
          [image, setImage] = useState("")

    const dispatch = useDispatch()
    
    const inputImage = useCallback((event) => {
        setImage(event.target.value)
    }, [setImage])
    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])
    const inputSelf_introduction = useCallback((event) => {
        setSelf_introduction(event.target.value)
    }, [setSelf_introduction])
    

    return (
        <section className='c-section-wrapin'>
            <div className={classes}>
                <div>
                    <input type="file" onChange={inputImage} value={image} />
                </div>
                <TextInput
                    fullWidth={true} label={'名前'} multiline={false} rows={1}
                    required={true} onChange={inputName} value={name} type={'text'}
                />
                <TextInput
                    fullWidth={true} label={'自己紹介'} multiline={true} rows={10}
                    required={true} onChange={inputSelf_introduction} value={self_introduction} type={'text'}
                />
                <div>
                    <PrimaryButton label='更新する' onClick={() => dispatch(changeProfile(image, name, uid, self_introduction))} />
                </div>
            </div>
        </section>
    )
}

export default ChangeProfile