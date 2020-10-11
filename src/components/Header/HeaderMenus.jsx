import React, {useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton'
// import Badge from '@material-ui/core/Badge'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuIcon from '@material-ui/icons/Menu'
// import {getUserId} from '../../reducks/users/selectors'
import {useSelector, useDispatch} from 'react-redux'
// import {db} from '../../firebase/index'
// import {fetchProductsInCart} from '../../reducks/users/operations'
import {push} from 'connected-react-router'
import {PrimaryButton} from '../UIkit/index'


const HeaderMenus = (props) => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    // const uid = getUserId(selector)
    // let productsInCart = getProductsIncart(selector)

    // useEffect(() => {
    //     // リスナーの解除 / ページ遷移した時等にunsubscribeを実行しないとリスナーが解除されないままになるため
    //     const unsubscribe = db.collection('users').doc(uid).collection('cart')
    //         .onSnapshot(snapshots => {   // onSnapshotはsnapshotを複数で取得する / onSnapshotでリスナーを設定
    //             snapshots.docChanges().forEach(change => {
    //                 const product = change.doc.data()    // cartの中にある商品情報を取得
    //                 const changeType = change.type

    //                 switch (changeType) {
    //                     case 'added':
    //                         productsInCart.push(product)    // firebaseのデータに存在する商品情報をstoreに入れる
    //                         break;
    //                     case 'modified':
    //                         const index = productsInCart.findIndex(product => product.cartId === change.doc.id)
    //                         productsInCart[index] = product
    //                     case 'removed':
    //                         productsInCart = productsInCart.filter(product => product.cartId !== change.doc.id)
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             })

    //             dispatch(fetchProductsInCart(productsInCart)) // [{}, {}, {}...]
    //         })
        
    //         return () => unsubscribe()    // useEffectのreturn時はcomponentWillUnMountと同様
    // }, [])                             // returnでunsubscribe()を呼び出す / unsubscribeはcallbackの形で記述

    return (
        <>
            <IconButton >
                {/* <Badge badgeContent={productsInCart.length} color='secondary' >
                    <ShoppingCartIcon />
                </Badge> */}
                <PrimaryButton label='意見を投稿する' onClick={() => dispatch(push('/put'))} />
            </IconButton>
            <IconButton>
                <FavoriteBorderIcon />
            </IconButton>
            <IconButton onClick={(event) => props.handleDrawerToggle(event)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default HeaderMenus;