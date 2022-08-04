import React from 'react';
import pokemons from './data';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
    render() {
        return {
            name: this.props.name,
            type: this.props.type,

        }
    }
}

Pokemon.PropTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    weigth: PropTypes
}

export default Pokemon