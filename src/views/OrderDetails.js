import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import OrderDetailsForm from '../components/OrderDetailsForm'


export default class OrderDetails extends Component {

    render() {
        return (
            <OrderDetailsForm />
        );
    }
}

