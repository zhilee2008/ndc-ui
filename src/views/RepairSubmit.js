var React = require('react');

import RepairForm from '../components/RepairForm'


const loginDiv = {
    width: '100%',
    textAlign: 'center',
    margin: '0 auto'
};

export default class RepairSubmit extends React.Component {

    render() {
        return (
            <RepairForm />
        );
    }
}

