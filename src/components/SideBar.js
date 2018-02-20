import React, { Component } from 'react';

class SideBar extends Component {

  render() {

    return (
      <aside className="kiri"{openState}>
        <nav className="nav">
          <ul>
            <li className="active"><a href="index.html"><i className="fa fa-circle-o-notch" /><span>Overview</span></a></li>
            <li><a href="buku.html"><i className="fa fa-book" /><span>Buku</span></a></li>
            <li><a href="siswa.html"><i className="fa fa-user" /><span>Siswa</span></a></li>
            <li><a href="#"><i className="fa fa-arrow-circle-right" /><span>Pinjam</span></a></li>
            <li><a href="#"><i className="fa fa-arrow-circle-left" /><span>Kembali</span></a></li>
            <li><a href="#"><i className="fa fa-dollar" /><span>Denda</span></a></li>
            <li><a href="#"><i className="fa fa-star" /><span>Favorit</span></a></li>
            <li><a href="#"><i className="fa fa-gear" /><span>Pengaturan</span></a></li>
            <li><a href="#"><i className="fa fa-external-link" /><span>Link</span></a></li>
          </ul>
        </nav>
      </aside>

    )
  }

}

export default SideBar;
