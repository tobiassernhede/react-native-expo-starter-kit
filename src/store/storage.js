import { AsyncStorage } from 'react-native';

export function serialize(key, data, callback) {
  return AsyncStorage.setItem(key, JSON.stringify(data), (err, item) => {
    if (!!(callback)) {
      callback(err, data);
    }
  });
}

export function deserialize(key, callback) {
  return AsyncStorage.getItem(key, (err, data) => {
    if (!!(callback)) {
      callback(err, JSON.parse(data));
    }
  });
}