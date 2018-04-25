import React, { Component } from 'react';
import axios from 'axios';

import Setting from '../../Setting';

class CreateBook extends Component {
  constructor(props){
    super(props);
    this.state = { code: '', title: '', writer: '', publisher: '', synopsis: '', stock: '' };

    this.handleCode = this.handleCode.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleWriter = this.handleWriter.bind(this);
    this.handlePublisher = this.handlePublisher.bind(this);
    this.handleSynopsis = this.handleSynopsis.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCode(e){
    this.setState({
      code: e.target.value
    })
  }
  handleTitle(e){
    this.setState({
      title: e.target.value
    })
  }
  handleWriter(e){
    this.setState({
      writer: e.target.value
    })
  }
  handlePublisher(e){
    this.setState({
      publisher: e.target.value
    })
  }
  handleSynopsis(e){
    this.setState({
      synopsis: e.target.value
    })
  }
  handleStock(e){
    this.setState({
      stock: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const books = {
      code: this.state.code,
      title: this.state.title,
      writer: this.state.writer,
      publisher: this.state.publisher,
      synopsis: this.state.synopsis,
      stock: this.state.stock
    }
    const url = Setting.url + '/api/books';
    axios.post(url, books).then((response) => {
      this.props.history.push('/books');
    });
  }

    render() {
      return (
        <div className="main main-noscrx">
          <div className="wrap">
            <form className="pinjambuku w33" onSubmit={this.handleSubmit}>
              <input type="number" placeholder="Kode Buku" onChange={this.handleCode} />
              <input type="text" placeholder="Judul Buku" onChange={this.handleTitle} />
              <input type="text" placeholder="Penulis Buku" onChange={this.handleWriter} />
              <input type="text" placeholder="Penerbit Buku" onChange={this.handlePublisher} />
              <input type="text" placeholder="Tentang Buku" onChange={this.handleSynopsis} />
              <input type="number" placeholder="Stok Buku" onChange={this.handleStock} />
              <button type="submit">Add Book</button>
            </form>
          </div>
        </div>
      )
    }
}
export default CreateBook;
