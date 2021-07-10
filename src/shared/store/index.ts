import { createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { rootReducer } from './modules/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
