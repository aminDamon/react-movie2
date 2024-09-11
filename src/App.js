import React, { Component } from 'react';
import All from './components/All';
import Watch from './components/Watch';
import { allSeriesMovie } from './components/list';
import { Route as MyRoute, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Damon from './Damon';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
      main: ""
    };
  }

  handleLinkClick = (event) => {
    this.setState({
      showAll: false,
      main: event.target.dataset.movie
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  backHomeHandler = () => {
    this.setState({ showAll: true });
    window.removeEventListener('click', window);
  }

  render() {
    const { showAll, main } = this.state;
    const router = createBrowserRouter(
      createRoutesFromElements(
        <MyRoute path='/'>
          <MyRoute index element={<All handleLinkClick={this.handleLinkClick} />} />
          <MyRoute path={'inception'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'se7en'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'shutter'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'500'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'avatar'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'oppenheimer'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'pulp'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'barbie'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'shameless'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'stranger'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'himym'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'banshee'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'you'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'vikings'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'lucifer'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path={'wednesday'} element={<Watch backHomeHandler={this.backHomeHandler} main={main} />} />
          <MyRoute path='Damon' element={<Damon />} />
          <MyRoute path='*' element={<NotFound />}/>
        </MyRoute>
      )
    );

      return (
      <div>
        <RouterProvider router={router}/>
      </div>
    );
  }
}

export default App;

