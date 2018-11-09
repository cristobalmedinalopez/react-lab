import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerList from './../components/CustomerList';
import CustomerActions from './../components/CustomerActions';

const customers = [
    {
        "dni":"54101010",
        "name":"Pepa Pig",
        "age":10
    },
    {
        "dni":"64202020",
        "name":"Pedro Pony",
        "age":12
    },
    {
        "dni":"74303030",
        "name":"Jorge Pig",
        "age":8
    }
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }
    renderBody = customers => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers/'}>
            </CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);