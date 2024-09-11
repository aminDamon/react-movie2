import avatarCover from './pic/cover-slider/Rectangle 2.png';
import se7enCover from './pic/cover-slider/se7en.jpg';
import shutterCover from './pic/cover-slider/shutter.jpg';
import summerCover from './pic/cover-slider/summer.jpg';
import inceptionCover from './pic/cover-slider/inception.jpg';
import oppenheimerCover from './pic/cover-slider/oppenheimer.webp'
import pulpCover from './pic/cover-slider/pulp.webp'
import barbieCover from './pic/cover-slider/barbie.jpg'

import coverAvatar from './pic/cover-slider/avatar-y.webp'
import coverInception from './pic/cover-slider/inception-y.jpg'
import coverShutter from './pic/cover-slider/shutter-y.jpg'
import coverSummer from './pic/cover-slider/summer-y.jpg'
import coverSe7en from './pic/cover-slider/se7en-y.jpg'



import shamelessCover from './pic/cover-slider/shameless.jpg'
import himymCover from './pic/cover-slider/himym.webp'
import strangerCover from './pic/cover-slider/stranger.jpg'
import bansheeCover from './pic/cover-slider/banshee.webp'
import youCover from './pic/cover-slider/you.avif'
import vikingsCover from './pic/cover-slider/vikings.jpg'
import wednesdayCover from './pic/cover-slider/wednesday.jpg'
import luciferCover from './pic/cover-slider/lucifer.jpg'

import avatarMovie from './movie/avatar.mp4'
import inceptionMovie from './movie/inception.mp4'
import shutterMovie from './movie/shutter.mp4'
import summerMovie from './movie/500-days.mp4'
import se7enMovie from './movie/se7en.mp4'
import oppenheimerMovie from './movie/oppenheimer.mp4'
import barbieMovie from './movie/barbie.mp4'
import pulpMovie from './movie/pulp.mp4'

import shamelessMovie from './movie/shameless.mp4'
import vikingsMovie from './movie/vikings.mp4'
import strangerMovie from './movie/stranger.mp4'
import bansheeMovie from './movie/banshee.mp4'
import luciferMovie from './movie/lucifer.mp4'
import himymMovie from './movie/himym.mp4'
import youMovie from './movie/you.mp4'
import wednesdayMovie from './movie/wednesday.mp4'

export let lists = [
    {
        category: "none", 
        cover: avatarCover , 
        name: "Avatar : The Way of Water" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2022 , time: "3:12:00" , 
        star: 6.5 , 
        genre:["Action" , "Science Fiction" , "Adventure"] ,
        yCover: coverAvatar,
        cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Kate Winslet, Cliff Curtis"
    },
    {
        category: "trending", 
        cover: inceptionCover , 
        name: "Inception" ,
        src: inceptionMovie, 
        type: 'video/mp4',
        years: 2010 , 
        time: "2:28:00" , 
        star: 8.8 , 
        genre:["Action" , "Adventure" , "Sci-Fi"],
        yCover: coverInception,
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy, Ken Watanabe, Cillian Murphy"
    },
    {
        category: "none", 
        cover: shutterCover , 
        name: "Shutter Island" ,
        src: shutterMovie, 
        type: 'video/mp4',
        years: 2010 , time: "2:19:00" , 
        star: 8.2 , 
        genre:["MyStery" , "Thriller" , "Drama"] ,
        yCover: coverShutter,
        cast: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Michelle Williams, Patricia Clarkson, Max von Sydow"
    },
    {
        category: "none", 
        cover: summerCover , 
        name: "500 Days Of Summer" ,
        src: summerMovie, 
        type: 'video/mp4',
        years: 2009 , time: "1:39:00" , 
        star: 7.7 , 
        genre:["Comedy" , "Drama" , "Romance"],
        yCover: coverSummer,
        cast: "Joseph Gordon-Levitt, Zooey Deschanel, Geoffrey Arend, Chloë Grace Moretz, Matthew Gray Gubler, Clark Gregg"
    },
    {
        category: "none", 
        cover: se7enCover , 
        name: "Se7en" , 
        src: se7enMovie,
        type: 'video/mp4',
        years: 1995 , 
        time: "2:07:00" , 
        star: 8.6 , 
        genre:["Crime" , "Drama" , "MyStery"] ,
        yCover: coverSe7en,
        cast: "Brad Pitt, Morgan Freeman, Kevin Spacey, Gwyneth Paltrow, R. Lee Ermey, and John C. McGinley"
    },
    {
        category: "trending", 
        cover: oppenheimerCover , 
        name: "Oppenheimer" , 
        src: oppenheimerMovie,
        type: 'video/mp4',
        years: 2023 , 
        time: "3:03:00" , 
        star: 8.9 , 
        genre:["Action" , "Drama" , "Documentary"] ,
        yCover: oppenheimerCover,
        cast: ""
    },
    {
        category: "none", 
        cover: pulpCover , 
        name: "Pulp Fiction" , 
        src: pulpMovie,
        type: 'video/mp4',
        years: 1994 , 
        time: "2:41:00" , 
        star: 8.9 , 
        genre:["Horror" , "Gangster" , "Indie film"] ,
        yCover: pulpCover,
        cast: "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth"
    },
    {
        category: "trending", 
        cover: barbieCover , 
        name: "Barbie" , 
        src: barbieMovie,
        type: 'video/mp4',
        years: 2023 , 
        time: "1:45:00" , 
        star: 7 , 
        genre:["Animation" , "Drama" , "Comedy"] ,
        yCover: barbieCover,
        cast: ""
    }
];

export let series = [
    {
        category: "none",
        cover: shamelessCover , 
        name: "Shameless" , 
        src: shamelessMovie,
        type: 'video/mp4',
        years: 2010, 
        season: 10,
        episode: 10,
        star: 8.4, 
        genre:["Comedy" , "Drama" , "Romance"],
        cast: "William H., Emmy Rossum, Jeremy Allen White, Cameron Monaghan, Emma Kenney, Ethan Cutkosky" 
    },
    {
        category: "none",
        cover: strangerCover , 
        name: "Stranger things" , 
        src: strangerMovie,
        type: 'video/mp4',
        years: 2015 , 
        season: 4,
        episode: 9,
        star: 8.8 , 
        genre:["Horror" , "Mystery" , "Drama"],
        cast: "Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin" 
    },
    {
        category: "none",
        cover: himymCover , 
        name: "Himym" , 
        src: himymMovie,
        type: 'video/mp4',
        years: 2004, 
        season: 9,
        episode: 24,
        star: 8.5 , 
        genre:["Sitcom" , "Comedy" , "Romance"],
        cast: "Josh Radnor, Jason Segel, Cobie Smulders, Neil Patrick Harris, Alyson Hannigan, Cristin Milioti" 
    },
    {
        category: "none",
        cover: bansheeCover , 
        name: "Banshee" , 
        src: bansheeMovie,
        type: 'video/mp4',
        years: 2013 , 
        season: 4,
        episode: 12,
        star: 8.4 , 
        genre:["Action" , "Drama" , "Crime thriller"],
        cast: "Antony Starr, Ivana Miličević, Ulrich Thomsen, Frankie Faison, Hoon Lee, Rus Blackwell" 
    },
    {
        category: "none",
        cover: youCover , 
        name: "You" , 
        src: youMovie,
        type: 'video/mp4',
        years: 2018 , 
        season: 4,
        episode: 10,
        star: 8.4 , 
        genre:["thriller" , "Drama" , "Romance"],
        cast: "" 
    },
    {
        category: "none",
        cover: vikingsCover , 
        name: "Vikings" , 
        src: vikingsMovie,
        type: 'video/mp4',
        years: 2009 , 
        season: 6,
        episode: 20,
        star: 8.7 , 
        genre:["Historical" , "Drama" , "Action"],
        cast: "" 
    },
    {
        category: "none",
        cover: wednesdayCover , 
        name: "Wednesday" , 
        src: wednesdayMovie,
        type: 'video/mp4',
        years: 2022 , 
        season: 1,
        episode: 10,
        star: 8.2 , 
        genre:["Horror" , "Comedy" , "Drama"],
        cast: "" 
    },
    {
        category: "none",
        cover: luciferCover , 
        name: "Lucifer" , 
        src: luciferMovie,
        type: 'video/mp4',
        years: 2016 , 
        season: 6,
        episode: 20,
        star: 8.1 , 
        genre:["Action" , "MyStery" , "Detective Fiction"],
        cast: "" 
    }
]

export let allSeriesMovie = [...lists , ...series]