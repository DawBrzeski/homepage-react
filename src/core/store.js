import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import saga from './saga';
import themeReducer from "../common/themeSlice";
import personalHomepageReducer from "../features/personalHomepage/personalHomepageSlice";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,

  },
  middleware: [sagaMiddleware],
});


sagaMiddleware.run(saga);

export default store;
