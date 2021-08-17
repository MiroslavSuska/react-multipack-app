import { Provider } from 'react-redux';

import { CounterTemplate } from './CounterTemplate';
import { store } from './store';

export const ReduxCounter = () => {
  return (
    <Provider store={store}>
      <CounterTemplate />
    </Provider>
  );
};
