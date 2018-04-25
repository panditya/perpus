import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import BooksIndex from './components/Book/Index';
import Book from './components/Book/Book';
import CreateBook from './components/Book/Create';

import registerServiceWorker from './registerServiceWorker';

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
            <li className="active"><Link to="/"><i className="fa fa-circle-o-notch" /><span>Overview</span></Link></li>
            <li><Link to="/books"><i className="fa fa-book" /><span>Buku</span></Link></li>
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

class Index extends Component {
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
      <BrowserRouter>
      <div className="cover">
          <TopBar toggle={this.updateSwitch} />
          <SideBar classState={this.state.classState} />
          <aside className={mainClass}>
              <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/books" component={BooksIndex}/>
                <Route path="/books/create" component={CreateBook}/>
                <Route path='/books/:id' component={Book}/>
              </Switch>
          </aside>
      </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
