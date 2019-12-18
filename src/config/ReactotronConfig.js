import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

//host: IP DA MÁQUINA HOST
if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({host: '192.168.0.11'})
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
