import { createStore } from 'redux';
import reducer from './reducers';

// Definir state inicial
// const initialState = [];
const storageState = obtenerStateStorage();

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  guardarStateStorage({
    citas: sotre.getState().citas
  })
})

export default store;