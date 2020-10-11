import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import { useSelector, useDispatch } from 'react-redux';
import {getUserId, getUsername} from '../reducks/users/selectors'
import {db} from '../firebase/index'
import {OpinionCard} from '../components/Opinion/index'
import {PrimaryButton} from '../components/UIkit/index'
import {push} from 'connected-react-router'

const useStyles = makeStyles ((theme) => ({
    box: {
        display: 'flex',
        marginTop: 50
    },
    profile: {
        width: '50%'
    },
    article: {
        width: '50%'
    },
    avator: {
        
    },
    name: {

    },
    btn: {

    }
}));


const MyPage = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const uid = getUserId(selector) 
    // const username = getUsername(selector)
    // const role = getUserrole(selector)
    // const introduction = getUserintroduction(selector)
    // console.log(introduction);

    const [opinions, setOpinions] = useState(null),
          [name, setName] = useState(""),
          [self_introduction, setSelf_introduction] = useState(""),
          [avator, setAvator] = useState("")
          console.log(avator);

    useEffect(() => {
        db.collection('users').doc(uid).get().then(result => {
            const data = result.data();
            console.log(data.username);
            const username = data.username;
            const self_introduction = data.self_introduction;
            const avator = data.avator
            setName(username);
            setSelf_introduction(self_introduction)
            setAvator(avator)
        })
    }, [setName, setSelf_introduction])

    // userのopinionをfirebaseから取得する処理
    useEffect(() => {
        db.collection('opinions').orderBy('updated_at', 'desc').get().then((snapshots) => {
            const list = []
            snapshots.forEach(item => {
                const data = item.data()  //一つ一つのオブジェクトで取得
                list.push(data)  //[{}, {}, {}....]
            })
            const myOpinion = list.filter(item => {
                if (item['uid'] === uid) return true
            })
            setOpinions(myOpinion)
        })
    }, [setOpinions])

    return (
        <section className='c-section-wrapin'>
            <div className={classes.box}>
                <div className={classes.profile}>
                    <div className={classes.avator}>
                        {avator}
                    </div>
                    <div className={classes.name}>
                        {name}
                    </div>
                    <div className={classes.btn}>
                        <PrimaryButton 
                            label='プロフィールを変更する' onClick={() => dispatch(push('/mypage/profile'))}
                        />
                    </div>
                </div>
                <div className={classes.article}>
                    {opinions && (
                        opinions.map(opinion =>(
                            <OpinionCard 
                                id={opinion.id} key={opinion.id} text={opinion.text}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default MyPage;