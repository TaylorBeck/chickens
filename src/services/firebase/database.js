import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from './index';

const db = getDatabase(app);

export const getCoopsData = callback => {
  const coopsRef = ref(db, 'coops');
  return onValue(coopsRef, snapshot => {
    const data = snapshot.val();
    callback(data);
  });
};

export const getChickensData = callback => {
  const chickensRef = ref(db, 'chickens');
  return onValue(chickensRef, snapshot => {
    const data = snapshot.val();
    callback(data);
  });
};
