import React, { Component } from 'react'
import './styles/all-style.css'
import Header from './Header'
import WatchList from './WatchList'
import RecentUpdate from './RecentUpdate'
import Trending from './Trending'
import ReleaseMovie from './ReleaseMovie'
import ReleaseSeries from './ReleaseSeries'
import Recommend from './Recommend'
class All extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comp: {
            header: Header,
            watchList: WatchList,
         }
      }
    }
    
  render() {
    const HeaderTag = this.state.comp.header;
    const WatchList = this.state.comp.watchList;
    return (
      <div>
        <HeaderTag backHomeHandler={this.props.backHomeHandler} />
        <WatchList handleLinkClick={this.props.handleLinkClick} />
        <RecentUpdate handleLinkClick={this.props.handleLinkClick} />
        <Trending handleLinkClick={this.props.handleLinkClick} />
        <ReleaseMovie handleLinkClick={this.props.handleLinkClick} />
        <ReleaseSeries handleLinkClick={this.props.handleLinkClick} />
        <Recommend handleLinkClick={this.props.handleLinkClick} />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
export default All