import React,{Component, useState } from 'react';
import definitionContent from './definition-content';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Playlist extends Component {
  
  constructor(props) {
    super(props);
    this.state = {user: {
      name: 'Logan',
      points: 1000,
      sayings:[]
    }};
  }
  render() {
  
    return (

      <>
        <h1>user name and points :{this.state.user.name} {this.state.user.points}</h1>
      </>
    )
  }
}

// export Playlist;

const OnePage = () => {
  const [clicks, setClicks] = useState(0);
  const MyWrap = styled.div`
/* basic styling so we can
   see what's going on */
   * {
  box-sizing: border-box;
}
body {

  height: 100vh;
  font-family: 'Maven Pro', sans-serif;
  font-size: 12px;
  background-image: url("https://serving.photos.photobox.com/809129895ff63da6dec537ef4bbbe206d52535f8ecccbfcd0908c08ab2188a845c8e8a99.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.center {
  position: absolute;
  display: -webkit-box;
  display: flex;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 90vw;
  height: 100vh;
  margin-top: 11.5%;
  background: inherit;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 1px 8px -2px #808080;
}
@media screen and (max-width: 650px){

.center {
  position: absolute;
  display: -webkit-box;
  display: flex;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 90vw;
  height: 100vh;
  
  background: inherit;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 1px 8px -2px #808080;
}
}
.center:before {
  content: '';
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: -7.5vh;
  left: -5vw;
  background: inherit;
  box-shadow: inset 0 0 0 50vh rgba(255,255,255,0.2);
  -webkit-filter: blur(6px);
          filter: blur(6px);
}
.inspiration {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-family: 'Gill Sans', sans-serif;
  color: #000;
  text-shadow: 0 0 1px #fff;
}
.left,
.right {
  position: relative;
}
.left {
  -webkit-box-flex: 0;
          flex: 0 0 140px;

}
@media screen and (max-width: 600px) {
	.left {
		display: none;
	}
	.right {}
}

.left .controls {
  position: absolute;
  top: 13px;
  left: 13px;
}
.left .controls .close,
.left .controls .minimize,
.left .controls .maximize {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-right: 3px;
}
.left .controls .close {
  background-color: #fe5e57;
}
.left .controls .minimize {
  background-color: #ffbd2e;
}
.left .controls .maximize {
  background-color: #29ca42;
}
.left .menu,
.left .playlists {
  margin: 50px 20px;
  color: rgba(51,51,51,0.7);
}
.left .menu .title,
.left .playlists .title {
  margin: 10px 0;
}
.left .menu .item,
.left .playlists .item {
  position: relative;
  padding: 3px 0 3px 25px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 16px;
}
.left .menu .item:hover:before,
.left .playlists .item:hover:before {
  content: '';
  position: absolute;
  top: -1px;
  left: -18px;
  width: 3px;
  height: 17px;
  background-color: #000;
  border-radius: 0 3px 3px 0;
}
.left .menu .item:hover,
.left .playlists .item:hover,
.left .menu .item.highlight,
.left .playlists .item.highlight {
  color: #222;
}
.left .menu .item i.material-icons,
.left .playlists .item i.material-icons {
  position: absolute;
  left: 0px;
  top: 3px;
  font-size: 16px;
}
.right {
  -webkit-box-flex: 1;
          flex: 1 1 auto;
  padding-left: 30px;
  background-color: transparent;
  background-color: rgba(243,245,248,0.6);
}
.right .search {
  position: relative;
  margin-top: 15px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
}
.right .search input {
  width: 210px;
  border: none;
  outline: none;
  background: none;
}
.right .account {
  position: absolute;
  top: 10px;
  right: 20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
}
.right .avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #333;
}
.right .row {
  margin-top: 20px;
}
.right h1 {
  display: inline;
  font-size: 25px;
}
.right button.play {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: end;
          justify-content: flex-end;
  width: 77px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #fff;
  border-radius: 20px;
  background: -webkit-gradient(linear, left top, right top, from(#6377ff), to(#94a2fe));
  background: linear-gradient(to right, #6377ff, #94a2fe);
  color: #fff;
  vertical-align: top;
}
.right .albums {
  margin-top: 15px;
}
.right .albums .album {
  display: inline-block;
  padding-right: 15px;
  padding-bottom: 15px;
}
.right .albums .album img {
  width: 100px;
  border-radius: 7px;
}
.right .albums .album .album-title {
  text-align: center;
  padding: 5px;
}
.right .split {
  display: -webkit-box;
  display: flex;
}
.right .daily-mix {
  width: 55%;
}
.right .daily-mix h1 {
  display: block;
  margin-bottom: 20px;
}
.right .daily-mix .song {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: justify;
          justify-content: space-between;
  margin-top: 5px;
  margin-left: -5px;
  padding: 5px;
  cursor: pointer;
}
.right .daily-mix .song > * {
  width: 50%;
}
.right .daily-mix .song img {
  width: 25px;
  height: 25px;
  border-radius: 4px;
}
.right .daily-mix .song .duration {
  width: 28px;
}
.right .play-lists {
  width: 32%;
  margin-left: 20px;
}
.right .play-lists h1 {
  display: block;
  margin-bottom: 20px;
}
.right .play-lists .playlist {
  position: relative;
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
  width: 100%;
  max-width: 67vw;
  height: 36%;
  margin: 0 5% 5% 0;
  border-radius: 5px;
  box-shadow: 0px 1px 10px 1px #d3d3d3;
  background-color: #fff;
  cursor: pointer;
  padding: 5px 7px 5px 7px; 
}
.right .play-lists i {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
}
.right .current-play {
  position: absolute;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: justify;
          justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 70px;
  padding: 10px;
  margin-left: -30px;
  background-color: #f3f5f8;
}
.right .current-play .info {
  display: -webkit-box;
  display: flex;
}
.right .current-play img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.right .current-play .song {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  padding: 8px;
}
.right .current-play .song .name {
  font-size: 16px;
  font-weight: bold;
}
.right .current-play .song .artist {
  margin-top: 3px;
}
.right .current-play .controls {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  width: 220px;
}
.right .current-play .controls > * {
  margin: 0 10px;
}
.right .current-play .controls .prev,
.right .current-play .controls .next {
  color: #7584f4;
}
.right .current-play .controls .play {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  width: 40px;
  height: 40px;
  color: #fff;
  background: -webkit-gradient(linear, left top, right bottom, from(#7584f4), to(#5463ec));
  background: linear-gradient(to right bottom, #7584f4, #5463ec);
  border-radius: 50%;
  border: 1px solid #fff;
}
.right .current-play .controls .repeat,
.right .current-play .controls .shuffle {
  color: #d3d3d3;
}
.right .current-play .controls .repeat i,
.right .current-play .controls .shuffle i {
  font-size: 15px;
}
.right .current-play .volume {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
          justify-content: flex-end;
  width: 150px;
}
.right .current-play .volume i {
  color: #7584f4;
}
.right .current-play .volume .slider {
  position: relative;
  width: 125px;
  cursor: pointer;
}
.right .current-play .volume .slider__track-container {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 6px;
  background-color: #fff;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  border: 1px solid #eee;
  border-radius: 5px;
}
.right .current-play .volume .slider__track {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #7584f4;
  -webkit-transform-origin: left top;
          transform-origin: left top;
  will-change: transform;
  -webkit-transform: scaleX(0.6);
          transform: scaleX(0.6);
}
.right .current-play .volume .slider__thumb {
  width: 15px;
  height: 15px;
  -webkit-transform: translate(70px, 5px);
          transform: translate(70px, 5px);
  background-color: #7584f4;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 5px -1px #b2b2b2;
}
  `;
  
// const key = 1;
// if(key==1) return <h1> ohno, article doesn't exist</h1>
return (
  <>

<MyWrap>
<div className="center">
  <div className="left">
    <div className="controls">
      <div className="close"></div>
      <div className="minimize"></div>
      <div className="maximize"></div>
    </div>
    <div className="menu">
      <div className="title">MENU</div>
          <div className="item"><i className="material-icons">search</i><span>Explore</span></div>
          <div className="item"><i className="material-icons">layers</i><span>Genres</span></div>
          <div className="item"><i className="material-icons">radio</i><span>Radio</span></div>
          <div className="item"><i className="material-icons">mic</i><span>Artists</span></div>
          <div className="item"><i className="material-icons">album</i><span>Albums</span></div>
          <div className="item"><i className="material-icons">settings</i><span>Settings</span></div>
    </div>
    <div className="playlists">
      <div className="title">PLAYLISTS</div>
          <div className="item"><i className="material-icons">list</i><span>Liked</span></div>
          <div className="item"><i className="material-icons">list</i><span>Rap 2016</span></div>
          <div className="item"><i className="material-icons">list</i><span>Classic Music</span></div>
          <div className="item"><i className="material-icons">add_circle_outline</i><span>New Playlist</span></div>
    </div>
  </div>
  <div className="right">
    <div className="search"><i className="material-icons">search</i>
     {clicks}clicks nnb
    </div>
    <div className="account"><i className="material-icons">notifications_none</i><img className="avatar" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/350523/profile/profile-80.jpg?1"/></div>
    <div className="row">
      <h1>Featured Albums</h1>
      <button className="play"><span>PLAY</span><i className="material-icons">play_arrow</i></button>
    </div>
    <div className="albums">
          <div className="album"><img src="http://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png"/>
            <div className="album-title">Loud &bull; Rihana</div>
          </div>
          <div className="album"><img src="https://upload.wikimedia.org/wikipedia/en/3/35/Flume_-_Skin.png"/>
            <div className="album-title">Skin &bull; Flume</div>
          </div>
          <div className="album"><img src="https://images.genius.com/a95fb19b13cc4891dccc94aae0c6b2df.640x640x1.jpg"/>
            <div className="album-title">Illusion &bull; Jubel</div>
          </div>
          <div className="album"><img src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg"/>
            <div className="album-title">Dive &bull; Tycho</div>
          </div>
          <div className="album"><img src="https://upload.wikimedia.org/wikipedia/en/9/96/Future_cover.jpg"/>
            <div className="album-title">Future &bull; Future</div>
          </div>
          <div className="album"><img src="https://images.genius.com/27b630e743b1792609793ffc71699877.600x600x1.jpg"/>
            <div className="album-title">Evil Twin &bull; Guzior</div>
          </div>
    </div>
    <div className="split">
      <div className="daily-mix"> 
        <h1>Daily Points: {clicks}</h1>
            <div className="song"><img src="https://upload.wikimedia.org/wikipedia/en/9/96/Future_cover.jpg"/>
              <div onClick={()=>setClicks(clicks+1)}>Mask Off</div>
              <div onClick={()=>setClicks(clicks+1)}>Future</div>
              <div onClick={()=>setClicks(clicks+1)}>Future</div>
              <div className="duration">3:25</div>
            </div>
            <div className="song"><img src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg"/>
              <div>Daydream</div>
              <div>Tycho</div>
              <div>Dive</div>
              <div className="duration">3:54</div>
            </div>
            <div className="song"><img src="https://images.genius.com/a95fb19b13cc4891dccc94aae0c6b2df.640x640x1.jpg"/>
              <div>Illusion</div>
              <div>Jubel</div>
              <div>Illusion</div>
              <div className="duration">3:23</div>
            </div>
            <div className="song"><img src="http://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png"/>
              <div>Fading</div>
              <div>Rihanna</div>
              <div>Loud</div>
              <div className="duration">4:31</div>
            </div>
      </div>
      <div className="play-lists">
        <Playlist />
        {/* <h1>...</h1> */}
            <div className="playlist">
              <div>Global Top 100</div><i className="material-icons">arrow_forward</i>
            </div>
            <div className="playlist">
              <div>Acoustic Music</div><i className="material-icons">arrow_forward</i>
            </div>
            <div className="playlist">
              <div>Songs For Sleep</div><i className="material-icons">arrow_forward</i>
            </div>
            <div className="playlist">
              <div>Electronic Beats</div><i className="material-icons">arrow_forward</i>
            </div>
      </div>
    </div>
   
    </div>
  </div>

</MyWrap>
    </>
  )
  }

export default OnePage
