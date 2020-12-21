import {useDispatch, useSelector} from 'react-redux';
import {addListWishAC, fetchGetWishListAC, getWishListAC, getWishListUpdateAC} from "../../redux/actionCreators";
import {useEffect, useState, useContext} from "react";
import React from "react";
import style from "./AddWishListForm.module.css"
function AddWishListForm({indepCount, setIndepCount}) {


    const [inputText, setInputText] = useState(null)
    const gifts = 'aaaa'
    const dispatchAdd = useDispatch()
    const addWishList = (e) => {
        e.preventDefault()
        fetch('/wishlists', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({inputText: inputText, gifts: gifts})
        })
            .then(res => res.json())
        setIndepCount(indepCount + 1)
        console.log(indepCount)

    }

    return (

        <>
            <form  onSubmit={addWishList}>
                < input className={style.form} type="text"
                        name="wishListName"
                        placeholder="Введите название нового листа желаний"
                        onChange={(e) => setInputText(e.target.value)}
                        required/>
                <button className={style.button} type="submit">Добавить список</button>

            </form>
        </>

    )
}

export default AddWishListForm
