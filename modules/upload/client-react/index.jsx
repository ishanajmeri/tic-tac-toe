import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ClientModule from '@gqlapp/module-client-react';
import { translate } from '@gqlapp/i18n-client-react';
import { MenuItem } from '@gqlapp/look-client-react';

import createNetLink from './netLink';
import Upload from './containers/Upload';
import resources from './locales';
import Home from './new/home';
import Game from './new/tic-tac-toe';
import AIGame from './new/aigame';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

const NavLinkWithI18n = translate('upload')(({ t }) => (
  <NavLink to="/upload" className="nav-link" activeClassName="active">
    {t('navLink')}
  </NavLink>
));

export default new ClientModule({
  context: { upload: true },
  route: [
    <Route exact path="/upload" component={Upload} />,
    <Route exact path="/home" component={Home} />,
    <Route exact path="/game" component={Game} />,
    <Route exact path="/AI" component={AIGame} />
  ],
  navItem: [
    <MenuItem key="/upload">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'upload', resources }],
  createNetLink
});
