import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class BookFormModal extends Component {
    constructor() {
        super();
        this.state = {
            listOfBook: [],
            name: '',
            description: '',
            status: ''
        }
    }
    createBook = (e) => {
        this.setState({
            name: e.target.value,
            description: e.target.value,
            status: e.target.value,
        })
    }
    // descriptionBook = (e) => {
    //     this.setState({
            
    //     })
    // }
    // statusBook = (e) => {
    //     this.setState({
           
    //     })
    // }

    addBook = (e) => {
        e.preventDefault()
        try{

            const reqBody = {
                name: this.state.name,
                description: this.state.description,
                status: this.state.status,
                userEmail: this.props.auth0.user.email
            }
            // console.log('this.userEmail',reqBody.userEmail);
            // console.log('auth',this.props.auth0.user.email);
            const url = `http://localhost:8000/books`
            axios.post(url, reqBody).then(response => {
                console.log('new data', response.data);
                this.setState({
                    listOfBook: response.data
                })
            })
        }catch{
            console.log('error');
        }
    }
    render() {
        return (
            <>
                <form>
                    <input type='text' placeholder='add book' onChange={(e) => { this.createBook(e) }} />
                    <input type='text' placeholder='add description' onChange={(e) => { this.createBook(e) }} />
                    <input type='text' placeholder='add status' onChange={(e) => { this.createBook(e) }} />
                    <button onClick={(e) => { this.addBook(e) }}>add book</button>
                </form>
                <ol>
                    {
                        this.state.listOfBook.map(book => {
                            return <>
                                <li>{book.name},{book.description},{book.status}</li>
                                <button>Delete Book</button>
                            </>
                        })
                    }
                </ol>
            </>
        )
    }
}

export default withAuth0(BookFormModal);
