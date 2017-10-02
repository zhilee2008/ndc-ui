import React, { Component } from 'react';
import RepairSubmit from './views/RepairSubmit';
import './style.less';
import 'weui';
import '../packages/react-weui.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


let routes = []
class App extends Component {

  componentWillMount() {
    this.state = {
      showNavBar: true
    };
    routes = [
      {
        path: '/',
        exact: true,
        main: () => <RepairSubmit/>,
      }
      // { path: '',
      //     main: () => <NotFoundPage />,
      // },
    ];
  }

  displayNavBar = (display) => {
    this.setState({
      showNavBar: display
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div style={{ display: 'flex', paddingTop: '60px', height: '100%' }}>
            
            <div style={{ flex: 1, maxWidth: '100%', height: '100%', }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>

          </div>
        </Router>

      </div>

    );
  }
}

const DevelopingPage = ({ location }) => (
  <div>
    <h3><code>{location}</code>正在加班加点开发中 :)。。。。</h3>
  </div>
)
// const NotFoundPage = ({ location }) => (
//   <div>
//     <h3>No match for <code>{location.pathname}</code></h3>
//   </div>
// )


export default App;
