import React, { useState } from "react";
import GoogleButton from "react-google-button";
import firebase from "../../firebase/firebaseConfig";
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"; 

const Login = () => {
    const [email,setEmail] = useState('No');

    const validation = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(email);
                setEmail(user.displayName);
            } else {
                console.log("No user signed in");
            }
        });
    }

    const onSingIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div style={_styleLoginButton.button}>
            {validation()}
            {
                <GoogleButton onClick={onSingIn}/>
            }
        </div>
    );
};

const _styleLoginButton = {
    button: {
        marginTop: '8px',
      
    }
}

export default Login;