import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            loading: true
        }
    }

    /*async getCategoryList() {
        const response = await fetch('/Categories');
        const data = await response.json();
        this.setState({
            tasks: data,
            loading: false
        })
    }*/

    async getCategoryList() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.getUrl, true);
        var a = xhr;
        xhr.onload = function () {
            console.log(a);
            //var data = JSON.parse(xhr.responseText);
            this.setState({
                categories: [],
                loading: false
            });
        }.bind(this);
        xhr.send();
    }

    componentDidMount() {
        this.getCategoryList();
    }

    componentDidUpdate() {
        this.getCategoryList();
    }

    handleUpdate(id) {
        this.props.history.push(`/category-form/${id}`);
    }

    handleDelete(id) {
        if (!window.confirm('Ви впевнені?')) {
            alert('Видалення - відмінено!');
            return;
        } else {
            fetch(`Categories/Delete/${id}`, { method: 'delete' })
                .then(data => {
                    this.setState({
                        data: this.state.categories.filter(category => {
                            return category.id != id;
                        })
                    });
                    this.getCategoryList();
                });
        }
    }

    renderCategoryTable(categories) {
        return (
            <table className='table table-striped' aria-labelledby='table-caption'>
                <thead>
                    <th></th>
                    <th>Id</th>
                    <th>Назва</th>
                    <th>Options</th>
                </thead>
                <tbody>
                    {
                        categories.map(category => (
                            <tr>
                                <td></td>
                                <td>{category.id}</td>
                                <td>{category.categoryName}</td>
                                <td>
                                    <button className='btn btn-success'
                                        style={{ width: '100px' }}
                                        onClick={id => this.handleUpdate(category.id)}>
                                        Edit
                                    </button>
                                    <span>&nbsp;</span>
                                    <button className='btn btn-success'
                                        style={{ width: '100px' }}
                                        onClick={id => this.handleDelete(category.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let content = this.state.loading
            ? <h5>Loading...</h5>
            : this.renderCategoryTable(this.state.categories);
        return (
            <div>
                <h1 style={{ color: 'darkcyan' }}>Category list</h1>
                <p>
                    <Link to='/category-form'>Create new category</Link>
                </p>
                <p>
                    {content}
                </p>
            </div>
        );
    }
}