import React, { Component } from 'react';
import { Form, Container } from 'react-bootstrap'
import { connect } from 'react-redux'


class CreateGameForm extends Component {

    state = {
        roomName: '',
        amount: '5',
        category: '',
        categoryId: 0,
        difficulty: 'easy',
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    renderCategories = () => {
        let renderedOptions = this.props.categories.map(category => {
            return <option onSelect={() => { this.setState({ categoryId: category.id }) }} key={category.id} value={category.name}>{category.name}</option>
        })
        return renderedOptions
    }

    render() {
        return (
            <Form type="submit" onSubmit={this.createNewRoom}>
                <Form.Group>
                    <h3>Room Name</h3>
                    <Form.Control type="text" name="roomName" onChange={this.changeHandler} placeholder="Create a room name" />
                </Form.Group>
                <Form.Group>
                    <h3>Number of Questions</h3>
                    <Form.Control as='select' name='amount' value={this.state.amount} onChange={this.changeHandler}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <h3>Category</h3>
                    <Form.Control as='select' name="category" value={this.state.category} onChange={this.changeHandler}>
                        <option value=''>-- Please select a category --</option>
                        {this.renderCategories()}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control as='select' name='difficulty' value={this.state.difficulty} onChange={this.changeHandler}>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </Form.Control>
                </Form.Group>
                <button type='submit'>Create New Game!</button>
            </Form>
        )
    }
}

export default CreateGameForm