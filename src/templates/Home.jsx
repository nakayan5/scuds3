import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import {PrimaryButton} from '../components/UIkit/index'
// import {push} from 'connected-react-router'
import {fetchOpinions} from '../reducks/opinion/operations'
import {getOpinions} from '../reducks/opinion/selectors'
import {OpinionCard} from '../components/Opinion/index'

const Home = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state);　// おそらくuseSelector()はstore全体のstateを取得するメソッド
    const opinions = getOpinions(selector)
    // console.log(opinions);

    useEffect(() => {
        dispatch(fetchOpinions())
    }, [opinions])

    return (
        <div className='c-section-wrapin'>
            <div>
                {opinions.length > 0 && (
                    opinions.map(opinion => (
                        <OpinionCard
                            text={opinion.text} id={opinion.id} key={opinion.id}
                        />
                    ))
                )}
            </div>
            {/* <PrimaryButton label='意見を投稿する' onClick={() => dispatch(push('/put'))} /> */}
        </div>
    )
}

export default Home;