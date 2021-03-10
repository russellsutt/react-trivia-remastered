import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchCategories } from '../actions/thunks/fetchCategories'
import CreateGameForm from './forms/CreateGameForm'



class CreateGame extends Component {
    
    componentDidMount() {
        this.props.fetchCategories()
        console.log(this.props)
    }


    render() {
        return (
            <div>
                <h1>Create a Game</h1>
                <CreateGameForm categories={this.props.categories} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { categories: state.categories }
}


export default connect(mapStateToProps, { fetchCategories })(CreateGame);