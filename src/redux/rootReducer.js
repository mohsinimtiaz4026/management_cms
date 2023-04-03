import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// slices
import userReducer from './slices/user';
import formReducer from './slices/forms';

import {clearStore} from './util';

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const userPersistConfig = {
  key: 'user',
  storage,
  keyPrefix: 'redux-',
  // whitelist: [],
};

const formPersistConfig = {
  key: 'forms',
  storage,
  keyPrefix: 'redux-',
  // whitelist: [],
};

// const rootReducer = combineReducers({
//   truck: persistReducer(truckPersistConfig, truckReducer),
// });

const appReducer = combineReducers({
  users:  userReducer,
  forms:  formReducer,
});

const rootReducer = (state, action) => {
  // TODO: currently this doesn't clear with persist, only clears temporary
  if (action.type === clearStore.type) {
    storage.removeItem('persist:root');
    storage.removeItem('persist:users');
    storage.removeItem('persist:forms');
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export {rootPersistConfig, rootReducer};
