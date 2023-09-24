import React, { Component } from 'react';
import { Product } from '../models/Product';

export class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: new Product(),
        }
    };

    handleSave(e) {

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
                    <div className='form-gorup row'>
                        <label className='control-label col-md-12'>Product Name:</label>
                        <div className='col-md-4'>
                            <input type='text' name='name' value={this.state.product.name} />
                        </div>
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
