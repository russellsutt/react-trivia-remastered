import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { socket } from '../../App'
import { withRouter } from 'react-router-dom'



class CreateGameForm extends Component {

    state = {
        roomName: '',
        amount: '5',
        category: 'unselected-category',
        categoryId: '',
        difficulty: 'easy',
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    renderCategories = () => {
        let renderedOptions = this.props.categories.map(category => {
            return <option onClick={() => { this.setState({ categoryId: category.id }) }} key={category.id} value={category.name}>{category.name}</option>
        })
        return renderedOptions
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.state.category === "unselected-category") {
            window.alert('Please slect a category')
        } else {
            let config = {
                roomName: this.state.roomName,
                category: this.state.category,
                difficulty: this.state.difficulty,
                amount: this.state.amount
            }
            socket.emit('createRoom', config, (res) => {
                if(res.code === 'success') {
                    this.props.history.push('/lobby')
                } else {
                    window.alert(res.msg)
                }
            })
        }

    }

    render() {
        return (
            <Form type="submit" onSubmit={this.submitHandler}>
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
                        <option value='unselected-category'>-- Please select a category --</option>
                        <option value=''>Miscellaneous</option>
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


export default withRouter(CreateGameForm)