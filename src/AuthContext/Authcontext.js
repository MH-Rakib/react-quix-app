import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("dhukse");
    });
    return unsubscribe;
  }, []);

  // firebase functions
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
}

// export default AuthProvider;

// REACT_APP_API_KEY=AIzaSyDPkhCdgmobofICdPlOGXvhUuUYAwFmXkM
// REACT_APP_AUTH_DOMAIN=react-quiz-app-dev.firebaseapp.com
// REACT_APP_PROJECT_ID=react-quiz-app-dev
// REACT_APP_STORAGE_BUCKET=react-quiz-app-dev.appspot.com
// REACT_APP_MESSAGEING_SENDER_ID=92815288283
// REACT_APP_ID=1:92815288283:web:fc6fcf9eb219591197a9fe
