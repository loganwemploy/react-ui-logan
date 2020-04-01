import React from 'react';
import definitionContent from './definition-content';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';

// console.log(definitionContent[0].urlvid);
const HomePage = () => {
  
  const MyWrap = styled.div`
/* basic styling so we can
   see what's going on */
  margin: 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.5em 1fr 1.5em;
    grid-template-areas: ". main ." ". side .";




.main-content,
.sidebar,
{
  
  /* padding: 2em; */
}

header {
  background: #41D3BD;
}

.main-content {
  background: #fff;
  width: 100%;

}


.sidebar {
  background: #fff;
}

footer {
  background: #694D75;
}

div.cards#rood{
    margin-left:-15vw;
    margin-top: 3.5vw
   }

@media only screen and (min-width: 860px) {
 
    grid-template-columns: 1.5em minmax(400px, 650px) minmax(200px, 350px) 1.5em;
    grid-template-areas: ". side main ."
    ;
  }
}
@media only screen and (min-width: 860px) {

    grid-template-columns: 20px minmax(23vw, 32vw) 67vw minmax(1.5em, 1fr);
    grid-template-areas: ". side main ."
     ;
  
}
.main-content {
  grid-area: main;
}

.sidebar {
  grid-area: side;
  /* background-color: rgba(0, 120, 240, 0.15); */
}

a.btn {
  width:'25px';
  background: #0096a0;
  border-radius: 50%;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  display: inline-block;
  padding: 6px 8px 7px ;
  position: relative;
  text-decoration: none;
  -webkit-transition: all 0.1s 0s ease-out;
  transition: all 0.1s 0s ease-out;
}

   .sidebar ul li  {
  margin-left: -44px;
}


.admin-wrapper {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
  flex-wrap: nowrap;
  height: calc(100vh - 5em);
  margin: 2.5em;
  background-color: white;
  box-shadow: 0 0.5em 2em -0.2em rgba(0, 0, 0, 0.7);
}
.admin-sidebar {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-flex: 0;
          flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 24rem;
}
.admin-sidebar .user {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-flex: 0;
          flex-grow: 0;
  flex-shrink: 0;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  padding: 1.5rem;
  background-color: #fff;
  color: #fff;
}
.admin-sidebar .user .avatar {
  width: 8rem;
  height: 8rem;
  padding: 1rem;
  background-color: #08d;
  border-radius: 50%;
  box-sizing: border-box;
}
.admin-sidebar .user .avatar svg {
  width: 100%;
  height: 100%;
}
.admin-sidebar .user .name {
  margin-top: 1rem;
}
.admin-sidebar .user .name input {
  padding: 0.5rem;
  border: 0;
  background-color: transparent;
  color: #fff;
  text-align: center;
}
.admin-sidebar .user .name input:focus {
  outline: none;
}
.admin-sidebar .navi {
  -webkit-box-flex: 1;
          flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
}
.admin-sidebar .navi ul {
  height: 100%;
  margin: 0 auto 0 2.05em;
  padding: 0;
  
  
  list-style: none;

}
.admin-sidebar .navi ul > li + li {
  border-top: 0.1rem solid rgba(0, 0, 0, 0.05);
  
}
.admin-sidebar .navi ul > li:last-child {
  border-bottom: 0;
}
.admin-sidebar .navi ul > li > a {
  display: block;
  padding: 0.8rem 1.5rem;
  color: #222;
  text-decoration: none;
  text-transform: capitalize;
}
.admin-sidebar .navi ul > li > a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.admin-sidebar .navi ul > li > a.active {
  color: white;
  background-color: rgba(0, 0, 0, 0.32);
}
.admin-sidebar .foot {
  background-color: #d8d9da;
}
.admin-sidebar .foot .btcwdgt-price {
  box-shadow: none !important;
}

.sidebar-a {
  text-decoration:none;
  color:#222;
}


.main-content{
  background-color: #fff;
  overflow-x: scroll ;
  z-index:99999;
}

.plyr {
  border-radius: 4px;
  margin-bottom: 15px;
}
.contai {
  position:static;
  z-index:99999999;
}
video {
  /* margin-top: 60px; */
  width:50vw;
  
}
source {
  width: 100%;
  height: 100%;
}
.spacer {
  width: 100%;
  height: 4.5em;
}
  `;

// let key = 1;
// if(key==1) return <h1> ohno, article doesn't exist</h1>
return (
  <>

<MyWrap>

<div className="main-content" >
<div className="spacer"></div>
{/* {definitionContent.map((definit,key)=> ( */}
  <div className="contai">

    
  <video controls crossorigin playsinline poster={definitionContent[0].urlvid2} id="player">
                
                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576" />
                {/* <source src={definitionContent[0].urlvid} type="video/mp4" size="576" /> */}
         
                {/* https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4 */}
            
                <track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                    default />
                <track kind="captions" label="Français" srclang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />

               
                {/* <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a> */}
            </video>
  
  

   {/* ))} */}
   {/* <video src={definit.urlvid[0]}></video> */}
  <div className="actions">
    <button type="button" className="btn js-play">Play</button>
    <button type="button" className="btn js-pause">Pause</button>
    <button type="button" className="btn js-stop">Stop</button>
    <button type="button" className="btn js-rewind">Rewind</button>
    <button type="button" className="btn js-forward">Forward</button>
  </div>
  
  </div>

<mainC />



   
</div>

<div className="sidebar" style={{zIndex:'9999',maxHeight:'90.25vh',overflowY:'scroll',webkitBoxShadow: '10px 0 5px -2px #888',boxShadow: '2px 0 2px -3px #888',borderRight:'1px solid rgba(0,0,0,0.05)'}}>

{/*   
  <h3 style={{color:'#333'}}>Definitions</h3>
  <ul>    
  {definitionContent.map((definit,key)=> (
  <li style={{listStyle:'none'}}>
     <Link key={key} to={`/definitionspage/${definit.name}`}> <h3>{definit.name}</h3> 
     </Link>
  </li>
  ))}
</ul> */}


<div className="admin-sidebar">
    <div className="user">
      <div className="avatar">
        {/* <svg width="90" height="90">
          <use xlink:href="#avatar-ivan"></use>
        </svg> */}
      </div>
      {/* <div className="name">
        <input v-model="author" placeholder="Enter your name"/>
      </div> */}
    </div>
    <br/>
    <br/>
    <br/>
    <div className="navi">
      <ul>
      {/* demo */}
      {definitionContent.map((definit,key)=> (
  <li style={{listStyle:'none',textDecoration:'none',fontSize:'1.5em'}}>
     {/* <Link key={key} to={`/definitionspage/${definit.name}`}>  */}
     <a className='sidebar-a' href="#nav-demo">{definit.name}</a> 
     {/* </Link> */}
  </li>
  ))}
      </ul>
    </div>
  </div>
</div>



     
      </MyWrap> 
<footer style={{display:'flex',justifyContent:'flex-end'}}>
  {/* <img style={{height:'25vh',width:'67vw',marginTop:'-36vh',zIndex:'9999999'}} src="https://dl3.pushbulletusercontent.com/AUaJkHf6h5gBX5yDKYOc6Qxu3rcYEK2u/easel.png" alt="easel"/> */}
  </footer>
    </>
  )
  }

export default HomePage
