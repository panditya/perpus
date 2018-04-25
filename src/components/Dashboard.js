import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class Dashboard extends Component {

  render() {

    return (
      <div className="main main-noscrx">
        <div className="wrap">
          <Masonry className="grid">
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp">
                <div className="stat">
                  <div className="ikon member">
                    <i className="fa fa-user" />
                  </div>
                  <div className="statval">
                    <a className="tblink" href="#"><i className="fa fa-external-link" /></a>
                    <span>Siswa</span>
                    <a href="#">
                      <number>519</number>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp delay-03s">
                <div className="stat">
                  <div className="ikon book">
                    <i className="fa fa-book" />
                  </div>
                  <div className="statval">
                    <a className="tblink" href="#"><i className="fa fa-external-link" /></a>
                    <span>Buku</span>
                    <a href="#">
                      <number>8.342</number>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item w66">
              <div className="grid-wrap animated fadeInUp delay-05s">
                <div className="stat">
                  <div className="ikon denda">
                    <i className="fa fa-dollar" />
                  </div>
                  <div className="statval">
                    <a className="tblink" href="#"><i className="fa fa-external-link" /></a>
                    <span>Denda</span>
                    <a href="#">
                      <number>Rp. 2.542.700</number>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp">
                <div className="chart-outer">
                  <div className="line-chart item-chart">
                    <span className="jdsec">Pengunjung</span>
                    <canvas id="linechart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp delay-05s">
                <div className="donat-chart item-chart">
                  <canvas id="donatchart" />
                </div>
              </div>
            </div>
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp delay-03s">
                <div className="tabel tabelover peminjaman">
                  <table cellSpacing={0} cellPadding={0}>
                    <tbody><tr>
                        <th className="indek plgkiri">Peminjaman</th>
                        <th className="plgkanan val">Jumlah</th>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Hari ini</td>
                        <td className="number plgkanan val">324</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Kemarin</td>
                        <td className="number plgkanan val">23</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Minggu ini</td>
                        <td className="number plgkanan val">435</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Bulan ini</td>
                        <td className="number plgkanan val">7653</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp delay-05s">
                <div className="tabel tabelover pengembalian">
                  <table cellSpacing={0} cellPadding={0}>
                    <tbody><tr>
                        <th className="indek plgkiri">Pengembalian</th>
                        <th className="plgkanan val">Jumlah</th>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Hari ini</td>
                        <td className="number plgkanan val">14</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Kemarin</td>
                        <td className="number plgkanan val">34</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Minggu ini</td>
                        <td className="number plgkanan val">54</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Bulan ini</td>
                        <td className="number plgkanan val">241</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
            <div className="grid-item w33">
              <div className="grid-wrap animated fadeInUp">
                <div className="tabel tabelover denda">
                  <table cellSpacing={0} cellPadding={0}>
                    <tbody><tr>
                        <th className="indek plgkiri">Denda</th>
                        <th className="plgkanan val">Jumlah</th>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Hari ini</td>
                        <td className="number plgkanan val">Rp. 2.300</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Kemarin</td>
                        <td className="number plgkanan val">Rp. 5.100</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Minggu ini</td>
                        <td className="number plgkanan val">Rp. 23.700</td>
                      </tr>
                      <tr className="hovery">
                        <td className="plgkiri">Bulan ini</td>
                        <td className="number plgkanan val">Rp. 135.482</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </Masonry>
        </div>
      </div>
    );
  }

}

export default Dashboard;
