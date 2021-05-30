import React, { useState } from "react";
import useStore from "../store/mainStore";
import ItemSmall from "../components/ItemSmall";
import Link from "next/link";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBojq28TLplE1Tc0kS0Q4jlI7kjyIJbh_M",
    authDomain: "mazdashop-aa1a0.firebaseapp.com",
    projectId: "mazdashop-aa1a0",
    storageBucket: "mazdashop-aa1a0.appspot.com",
    messagingSenderId: "100795691723",
    appId: "1:100795691723:web:2e5ba0a3d728ddf24b214e",
    measurementId: "G-D3JD7RQ3WS",
  });
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const collectionRef = firestore.collection("orders");

const account = () => {
  const [user] = useAuthState(auth);
  const model = useStore((state) => state.model);
  const orderedModels = useStore((state) => state.orderedModels);
  
  const addModel = useStore((state) => state.addModel);
  const favorites = useStore((state) => state.favorites);

  const submitOrder = async () => {
    const { uid, email, phoneNumber, displayName } = auth.currentUser;

    try {
      await collectionRef.add({
        model: model.title,
        price: model.price,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        email,
        phoneNumber,
        displayName,
      });
      addModel(model.title);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotal = () => {
    let total = model.cost;
    if (model.engine?.cost) {
      total += model.engine?.cost;
    }
    if (model.comp?.cost) {
      total += model.comp?.cost;
    }
    return total;
  };

  return (
    <>
      <div className="accountP">
        <div className="account-main-block">
          <div className="userBlock">
            {user ? (
              <div>
                <div className="profileImage">
                  <img src={auth.currentUser.photoURL} />
                </div>
                <h3>{auth.currentUser.displayName}</h3>
                <h3>{auth.currentUser.email}</h3>
                <h3>{auth.currentUser.phoneNumber}</h3>
                <SignOut />
              </div>
            ) : (
              <SignIn />
            )}
          </div>
          {model ? (
            <>
              <div className="orderBlock">
                <h1>{model.title}</h1>
                <img src={model.image} />
                <h2>{model.price}</h2>
                {!orderedModels.some((x) => x === model.title) && (
                  <button
                    disabled={!user}
                    onClick={submitOrder}
                    className="btnkk"
                  >
                    ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                  </button>
                  
                )}
                {orderedModels.some((x) => x === model.title) && (
                  <h1>Заявка отправлена</h1>
                )}
                  
              </div>
              <div className="confBlock">
                <h2>Конфигурация</h2>
                <h3 className="text-wrap">{`Двигатель: ${model.engine?.title || "Стандартный"}`} </h3>
                <h3>
                  {`Комплектация: ${model.comp?.title || "Минимальная"}`}{" "}
                </h3>
                <h3>Итог: {getTotal()}</h3>
              </div>
            </>
          ) : (
            <div>
              <h1> Вы можете выбрать модель для заказа консультации </h1>
              <Link href="/shop">
                <button className="btnkk" onClick={() => "/shop"}>
                  Выбрать модель
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="FavoriteBlock">
          <h1 className="taxtFavorit"> Понравившиеся </h1>
          <div className="carsFa">
            {favorites.map((item, index) => (
              <ItemSmall key={index} {...item} showButtons={false} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default account;

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className="btnkk" onClick={signInWithGoogle}>
      Войти
    </button>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="btnkk" onClick={() => auth.signOut()}>
        Выйти
      </button>
    )
  );
};
