import React, { useState, useReducer, useEffect } from "react";
import firebase from "firebase";

import * as realTimedbApi from "../api/index.js";
import appsettings from "../../appsettings.json";
import { rootReducer } from "../shared/utils/rootReducer";

export const CurrentUserContext = React.createContext();
export const StateContext = React.createContext();
export const FoldersContext = React.createContext();
export const SubFoldersContext = React.createContext();
export const DocumentsContext = React.createContext();

const initalState = {
  data: [],
  search: "",
  inProgress: true
};

if (!firebase.apps.length) firebase.initializeApp(appsettings.firebaseConfig);

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [currentUser, setUser] = useState();
  const [folders, dispatchFolders] = useReducer(rootReducer, initalState);
  const [subFolders, dispatchSubFolders] = useReducer(rootReducer, initalState);
  const [documents, dispatchDocuments] = useReducer(rootReducer, initalState);
  const [state, dispatchState] = useReducer(rootReducer, initalState);

  useEffect(() => {
    realTimedbApi.getCollection("folders", dispatchFolders);
    realTimedbApi.getCollection("subFolders", dispatchSubFolders);
    realTimedbApi.getCollection("state", dispatchState);
    realTimedbApi.getCollection("documents", dispatchDocuments);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userId = user.email.replace(/[^0-9a-z]/gi, "");
        realTimedbApi.getUser("users", userId, setUser);
      }
    });
  }, []);

  return (
    <StateContext.Provider value={[state, dispatchState]}>
      <CurrentUserContext.Provider value={[currentUser, setUser]}>
        <FoldersContext.Provider value={[folders, dispatchFolders]}>
          <SubFoldersContext.Provider value={[subFolders, dispatchSubFolders]}>
            <DocumentsContext.Provider value={[documents, dispatchDocuments]}>
              {children}
            </DocumentsContext.Provider>
          </SubFoldersContext.Provider>
        </FoldersContext.Provider>
      </CurrentUserContext.Provider>
    </StateContext.Provider>
  );
};
export default Store;
