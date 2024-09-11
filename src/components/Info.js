import React, { Component } from 'react'
import { allSeriesMovie } from './list';
import './styles/info.css'
class Info extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         selectMovie: this.props.selectMovie
      }
    }
    
  render() {
    let selectFilm = allSeriesMovie.find((film) => {
        return film.name === this.state.selectMovie.name
    })
    return (
      <div className='information'>
        <div className='info'>
            <img src={selectFilm.yCover ? selectFilm.yCover : selectFilm.cover}/> 
            <div className='right'>
                <div className='name'><h1>{selectFilm.name}</h1><div className='favorite'><span>+</span> Add to Favorite</div></div>
                <br/>
                <br/>
                <br/>
                <div className='rate'>
                    <div className='genre_parent'>
                      <div className='genre'>{selectFilm.genre[0]}</div>
                      <div className='space'></div>
                      <div className='genre'>{selectFilm.genre[1]}</div>
                    </div>
                    <div className='years'><i className='fa fa-calendar'></i> {selectFilm.years}</div>
                    <div className='time'>{selectFilm.time ? (<React.Fragment><i className='fa fa-clock-o'></i> {' '} {selectFilm.time}</React.Fragment> ) : `season ${selectFilm.season}`}</div>
                    <div className='star'><i className='fa fa-star'></i> {selectFilm.star}</div>
                </div>
                <br/>
                <div className='caption'>In a ruined and toxic future, a community exists in a giant underground silo that plunges 
                hundreds of stories deep. There, men and women live in a society full of regulations they 
                believe are meant to protect them.
                </div>
                <br/>
                <br/>
                <br/>
                <div className='cast'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; country &nbsp; : &nbsp; United States
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;genre &nbsp; : &nbsp; {selectFilm.genre[0]},{selectFilm.genre[1]},{selectFilm.genre[2]}
                    <br/>
                    Date Release &nbsp; : &nbsp; {selectFilm.years}
                    <br/>
                    &nbsp;&nbsp; Production &nbsp; : &nbsp; AMC Studios
                    <br/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cast &nbsp; : &nbsp; <span>{selectFilm.cast}</span></span>
                    <br/>
                </div>
            </div>
            
        </div>
        
      </div>
    )
  }
}

export default Info
