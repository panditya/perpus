import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Setting from '../../Setting';

class BooksIndex extends Component {

  constructor() {
    super()
    this.state = { booksIndex: [] };
  }

  getBooksIndex() {
    const url = Setting.url + '/api/books';
    axios.get(url).then(response => {
         this.setState({ booksIndex: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
  }

  componentDidMount() {
    this.getBooksIndex();
  }

  render() {

    const { booksIndex }  = this.state;

    return (
        <div className="main">
          <div className="tabel tabeldata">
            <table className="fixedheadtabel" cellSpacing={0} cellPadding={0}>
              <thead className="fixedhead animated fadeInDown">
                <tr className="headtabel">
                  <th className="selek"><input type="checkbox" name="selekalldata" className="checkbox allcekdata checkbox--white" onclick="toggleselek(this)" /></th>
                  <th className="numlist">No</th>
                  <th className="kodebuku">Kode</th>
                  <th className="judulbuku">Judul</th>
                  <th className="penulisbuku">Penulis</th>
                  <th className="penerbit">Penerbit</th>
                  <th className="bukusedia plgkanan">Tersedia</th>
                </tr>
              </thead>
              <tbody>
                <tr />
              </tbody>
              <tbody className="animated fadeInDown">
                { booksIndex.map((item, index) => (
                <tr className="hovery" key={index}>
                  <td className="selek"><input type="checkbox" name="datatabel" className="checkbox cekdata checkbox--green"/></td>
                  <td className="numlist" />
                  <td className="kodebuku number">{item.code}</td>
                  <td className="judulbuku hyplink"><Link to={`${this.props.match.url}/${item.id}`}>{item.title}</Link></td>
                  <td className="penulisbuku">{item.writer}</td>
                  <td className="penerbit">{item.publisher}</td>
                  <td className="bukusedia plgkanan number">{item.stock}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default BooksIndex;
