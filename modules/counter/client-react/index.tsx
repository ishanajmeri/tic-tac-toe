import React from 'react';
import { Route } from 'react-router-dom';

// import Counter from './containers/Counter';
import counters from './counters';
import ClientModule from '@gqlapp/module-client-react';
import resources from './locales';
import Home from '/home/ishan/Project/tic-tac-toe/modules/upload/client-react/new/home';

export default new ClientModule(counters, {
  route: [<Route exact path={__TEST__ ? '/counter' : '/'} component={Home} />],
  localization: [{ ns: 'counter', resources }]
});
