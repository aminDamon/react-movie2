import React from 'react';
import './styles/watch-list.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';
import watchIcon from './pic/icons/watch-icon.png';
import { lists } from './list';

import { NavLink , Outlet } from 'react-router-dom'

function SwiperWatch({ handleLinkClick }) {
    let mainMovie = lists.slice(0,5)
  let movieList = mainMovie.map((movie, index) => (
    <SwiperSlide key={index} className='slider'>
      <img src={movie.cover} className='cover' />
      <div className='watch_btn'>
        <NavLink to={movie.name.toLocaleLowerCase().split(' ')[0]} onClick={handleLinkClick} data-movie={movie.name}>
          Watch Now <img src={watchIcon} />
        </NavLink>
        <a href='#'>Watch Later</a>
      </div>
      <div className='caption'>
        <h1>{movie.name}</h1>
        <div className='info'>
                <div className='genre'>{movie.genre[0]}</div>
                <div className='genre'>{movie.genre[1]}</div>
                <div className='genre'>{movie.genre[2]}</div>
            
            <div className='years'><i className='fa fa-calendar'></i> {movie.years}</div>
            <div className='time'><i className='fa fa-clock-o'></i> {movie.time}</div>
            <div className='star'><i className='fa fa-star'></i> {movie.star}</div>
        </div>
        <p>
            Set more than a decade after the events of the first film, learn the story of the 
            Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths 
            they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
        </p>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      pagination={{ clickable: true }}
    spaceBetween={30} 
    slidesPerView={1}
    autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}>
      {movieList}
      <main>
        <Outlet />
      </main>
    </Swiper>
  );
}

export default SwiperWatch;
