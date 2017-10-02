var React = require('react');

import RepairForm from '../components/RepairForm'

const wrapperStyle = {
    'textAlign':' -webkit-center',
};

export default class RepairSubmit extends React.Component {

    render() {
        return (
            <div style={wrapperStyle}>
                <RepairForm />
            </div>
        );
    }
}

