import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    if (process.env.NODE_ENV !== "production") {
        window.getState = store.getState;
        window.dispatch = store.dispatch;
        // window.createLike = createLike;
        // window.deleteLike = deleteLike;
    }


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)

});