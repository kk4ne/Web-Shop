import React, { Component } from 'react';

import { Category } from "../models/Category";

export class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: new Category(),
            loading: true
        }
        this.initialize();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async initialize() {
        let categoryId = this.props.match.params['categoryId'];
        if (categoryId > 0) {
            const response = await fetch(`Categories/${categoryId}`)
            const data = await response.json();
            this.setState({
                title: 'Edit category',
                task: data,
                loading: false
            })
        } else {
            this.state = {
                title: 'Create category',
                category: new Category(),
                loading: false
            }
        }
    }

    handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        if (this.state.category.categoryId) {
            fetch(`Categories/${this.state.category.categoryId}`, { method: 'PUT', body: data });
            this.props.history.push('/category-list');
        } else {
            fetch('Categories', { method: 'POST', body: data });
            this.props.history.push('/category-list');
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history('/category-list');
    }

    renderForm() {
        return (
            <>
                <form onSubmit={this.handleSave}>
                    <div className='form-gorup row'>
                        <input type='hidden' name='id' value={this.state.product.id} />
                    </div>
                    <div className='form-gorup row'>
                        <label className='control-label col-md-12'>Product Name:</label>
                        <div className='col-md-4'>
                            <input type='text' name='name' value={this.state.product.name} />
                        </div>
                    </div>
                    <br />
                    <div className='form-group'>
                        <button type='submit'
                            className='btn btn-success'
                            style={{width: '100px'}}>
                            Save
                        </button>
                        <span>&nbsp;</span>
                        <button type='submit'
                            className='btn btn-danger'
                            onClick={this.handleCancel}
                            style={{ width: '100px' }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </>
        )
    }

    render() {
        let content = this.state.loading
            ? <h5>Loading...</h5>
            : this.renderForm();
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Параметри категорії</h3>
                <hr />
                {content}
            </div>
        )
    }
}