import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div style={{height:'100%'}}>
        <App />
      </div>
    </MuiThemeProvider>,
  document.getElementById('root')
);