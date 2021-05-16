import React, { useState } from "react";
import useStore from "../store/mainStore";
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
  const [orderSent, setOrderSent] = useState(false);

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
      setOrderSent(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="accountP">
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
              {!orderSent && (
                <button
                  disabled={!user}
                  onClick={submitOrder}
                  className="orderButton"
                >
                  ЗАПИСАТЬСЯ КОНСУЛЬТАЦИЮ
                </button>
              )}
              {orderSent && <h1>Заявка отправлена</h1>}
            </div>
            <div>
              <h3>
                Создавая новую Mazda, мы никогда не делаем кардинальных перемен,
                но всегда вносим заметные и важные изменения. Каждое обновление
                модели – это развитие лучших ее качеств. Поэтому обновление
                любой модели Mazda – это не революция. Это эволюция. Прогресс от
                лучшего к превосходному.
              </h3>
            </div>
          </>
        ) : (
          <div>
            <h1> Вы можете выбрать модель для заказа консультации </h1>
            <Link href="/shop">
              <li>Выбрать модель</li>
            </Link>
          </div>
        )}
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
  return <button onClick={signInWithGoogle}>Войти</button>;
};

const SignOut = () => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
};
