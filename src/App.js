import React, { Component } from 'react';
import RepairSubmit from './views/RepairSubmit';
import Menu from './views/Menu';
import './style.less';
import 'weui';
import '../packages/react-weui.css';
import StatusQuery from './views/StatusQuery';
import StatusQueryItem from './views/StatusQueryItem';
import RepairManagement from './views/RepairManagement';
import RepairManagementItems from './views/RepairManagementItems';
import OrderDetails from './views/OrderDetails';
import OrderDetailsUpdate from './views/OrderDetailsUpdate';
import WatchVedio from './views/WatchVedio';

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
        path: '/menu/:admin',
        exact: true,
        main: () => <Menu/>,
      },
      {
        path: '/repairsubmit/:admin',
        exact: true,
        main: () => <RepairSubmit/>,
      },
      {
        path: '/statusquery',
        exact: true,
        main: () => <StatusQuery/>,
      },
      {
        path: '/statusqueryitem/:id',
        exact: true,
        main: () => <StatusQueryItem/>,
      },
      {
        path: '/repairmanagement',
        exact: true,
        main: () => <RepairManagement/>,
      },
      {
        path: '/repairmanagementitems/:status',
        exact: true,
        main: () => <RepairManagementItems/>,
      },
      {
        path: '/orderdetails/:id/:showIKnowBtn',
        exact: true,
        main: () => <OrderDetails/>,
      },
      {
        path: '/orderdetailsupdate/:id',
        exact: true,
        main: () => <OrderDetailsUpdate/>,
      },
      {
        path: '/watchvedio',
        exact: true,
        main: () => <WatchVedio/>
      },
      {
        path: '/test',
        exact: true,
        main: () => <log></log>
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
            <div style={{ maxWidth: '100%', height: '100%', }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
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


export default App;
