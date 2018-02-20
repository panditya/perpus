import React, { Component } from 'react';

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };

    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ isOn: !this.state.isOn}, function () {
        this.props.toggle(this.state.isOn);
    });
  }

  render() {
    const switchState = this.state.isOn ?
                    "title sm" :
                    "title";
    return (
      <div className="topnav">
        <div className={switchState}>
          <i className="togelmenu fa fa-bars ripple" onClick={this.update} />
        </div>
        <div className="userin togeluserbox">
          <div className="pp-border">
            <div className="ppuser">
              <img src="img/people/1.jpg" />
            </div>
          </div>
          <span>Bayu Kurnia <i className="fa fa-angle-down" /></span>
        </div>
      </div>

    );
  }
}


class SideBar extends Component {
  render() {
    const {classState} = this.props;
    const SideBarClass = classState === 'open' ? 'kiri open' :
    'kiri nomenu';
    return (
      <aside className={SideBarClass}>
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

SideBar.defaultProps = {
  classState: 'open'
};

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classState: 'open'
    };

    this.updateSwitch = this.updateSwitch.bind(this);
  }

  updateSwitch(isOn) {
    isOn ?
    this.setState({'classState':''}) :
    this.setState({'classState':'open'})
  }

  render() {
    const {classState} = this.state;
    const mainClass = classState === 'open' ? 'main' : 'main nomenu';
    return (
      <div className="cover">
          <TopBar toggle={this.updateSwitch} />
          <SideBar classState={this.state.classState} />
          <aside className={mainClass}>
          <div className="main main-noscrx">
            <div className="wrap">
              <div className="grid">
                <div className="grid-item w33">
                  <div className="grid-wrap anim">
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
                  <div className="grid-wrap anim delay-03s">
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
                  <div className="grid-wrap anim delay-05s">
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
                  <div className="grid-wrap anim">
                    <div className="chart-outer">
                      <div className="line-chart item-chart">
                        <span className="jdsec">Pengunjung</span>
                        <canvas id="linechart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item w33">
                  <div className="grid-wrap anim delay-05s">
                    <div className="donat-chart item-chart">
                      <canvas id="donatchart" />
                    </div>
                  </div>
                </div>
                <div className="grid-item w33">
                  <div className="grid-wrap anim delay-03s">
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
                  <div className="grid-wrap anim delay-05s">
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
                  <div className="grid-wrap anim">
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
              </div>
            </div>
          </div>
          </aside>
      </div>
    )
  }
}

export default Landing;
