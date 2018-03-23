import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class PlacesWrapper extends Component{
    constructor(props) {
        super(props)
        this.state = { address: '' }
    }

    onChange( address ) {
        const { question } = this.props;
        this.setState({ address });

        question.value = address;
    } 

    render() {
        const { address } = this.state;
        const inputProps = {
            value: address,
            onChange: this.onChange.bind(this),
            type: 'search'
        }
        const cssClasses = {
            root: 'form-group',
            input: 'form-control',
            autocompleteContainer: 'autocompleteContainer'
        }

        return (
            <PlacesAutocomplete
                classNames={ cssClasses } 
                inputProps={ inputProps }
                location={ address }
            />
        )
    }
}

export default PlacesWrapper;
