import * as ReactDOM from 'react-dom';

import App from './app/app';
import { BaseProviders } from './components/BaseProviders';

ReactDOM.render(
  <BaseProviders>
    <App />
  </BaseProviders>,
  document.getElementById('root')
);
