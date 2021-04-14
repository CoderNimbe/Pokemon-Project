import YoutubeBackground from "react-youtube-background";

const Home = () => {
  return (
//   <div>
//     <div className="video-background">
//       <div className="video-foreground">
     
//          <iframe id="ytplayer" title="as" type="text/html" width="720" height="405"
// src="https://www.youtube.com/embed/7Qa5Sy3b91w?autoplay=1&loop=1&color=white"
// frameborder="0" allowfullscreen></iframe>

//       </div>
//     </div>
//   </div>
  



  // {/* <video playsinline autoplay muted loop poster="XXXXX.jpg" id="bgvid">
  // <source src="" />
  // </video>
  //   <img
  //       src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png'
  //       alt='Pokemon'
  //       className='PokemonLogo'
  //     /> */}



      <YoutubeBackground
  videoId="7Qa5Sy3b91w"            
  overlay="rgba(0,0,0,.4)"             
  className="backgroundvideo"   
>
  <p>Hallo</p>
</YoutubeBackground>

)
};


export default Home;
