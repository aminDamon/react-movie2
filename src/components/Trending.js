import React from 'react'
import './styles/trending.css'
import { allSeriesMovie } from './list'
import watchIcon from './pic/icons/watch-icon.png';
import { NavLink } from 'react-router-dom';
function Trending({ handleLinkClick }) {
    let damon = allSeriesMovie.filter((tre) => {
        return tre.category === 'trending';
      });
    
    let trend = damon.map((tre , index) => {
        let styles = {backgroundImage: `url(${tre.cover})` , backgroundSize: "cover", backgroundPosition: "center"};
        let stylesTwo = {fontWeight: 'bolder'}
        return(
            <div className='trend' key={index}>
                <NavLink to={tre.name.toLocaleLowerCase().split(' ')[0]} className='trending_img' style={ styles }>
                    <img src={watchIcon} onClick={handleLinkClick} data-movie={tre.name} />
                    <div className='info'>
                        <div className='one'><i className='fa fa-clock-o'></i> <span>{tre.time}</span></div>
                        <div className='two'><i className='fa fa-star'></i><span>{tre.star}</span></div> 
                    </div>
                </NavLink> 
                <div className='caption'>
                   <NavLink to={tre.name.toLocaleLowerCase().split(' ')[0]} style={ stylesTwo } onClick={handleLinkClick} data-movie={tre.name}>{tre.name}</NavLink>
                   <div className='genre_tag'>
                        <div className='genre'>{tre.genre[0]}</div>
                        <div className='genre'>{tre.genre[1]}</div>
                    </div> 
                </div>
                
            </div>
            
        )
    })
    
  return (
    <div className='padding_all'>
        <h1 className='h1_body padding_top'>Trending</h1>
        <div className='trending'>
        { trend }
        </div>
      
      
    </div>
  )
}

export default Trending
