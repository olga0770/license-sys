import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import UserReducer from '../user/reducers/UserReducer';

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  userState: UserReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
                  rootReducer,
                  undefined,
                  composeWithDevTools(applyMiddleware(thunk))
                );

  return store;
}
