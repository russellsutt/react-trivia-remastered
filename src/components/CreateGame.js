import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Container } from 'react-bootstrap'
import { fetchCategories } from '../actions/thunks/fetchCategories'



class CreateGame extends Component {

    state = {
        roomName: '',
        amount: 5,
        category: '',
        categoryId: 0,
        difficulty: '',

    }
    
    componentDidMount() {
        this.props.fetchCategories()
        console.log(this.props)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    renderCategories = () => {
        this.props.categories.map(category => {
            return <option key={category.id} value={category.name}>{category.name}</option>
        })
    }


    render() {
        return (
            <div>
                <h1>Create a Game</h1>
                <Form type="submit" onSubmit={this.createNewRoom}>
                    <Form.Group>
                        <h3>Room Name</h3>
                        <Form.Control type="text" name="roomName" onChange={this.changeHandler} placeholder="Create a room name" />
                    </Form.Group>
                    <Form.Group>
                        <h3>Category</h3>
                        <Form.Control as="select" name="category" value={this.state.category} onChange={this.changeHandler}>
                            {this.props.categories ? this.renderCategories() : null }
                        </Form.Control>
                    </Form.Group>
                    <button type='submit'>Create New Game!</button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { categories: state.categories }
}


export default connect(mapStateToProps, { fetchCategories })(CreateGame);