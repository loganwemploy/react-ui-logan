import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
  // import Cart from './Cart';
  // import Search from './Search';
  
  // Router.onRouteChangeStart = () => {
  //   NProgress.start();
  // };
  // Router.onRouteChangeComplete = () => {
  //   NProgress.done();
  // };
  
  // Router.onRouteChangeError = () => {
  //   NProgress.done();
  // };
  
  const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
      padding: 0.5rem 1rem;
      background: ${props => props.theme.red};
      color: white;
      text-transform: uppercase;
      text-decoration: none;
    }
    @media (max-width: 1300px) {
      margin: 0;
      text-align: center;
    }
  `;
  
  const StyledHeader = styled.header`
    .bar {
      border-bottom: 10px solid ${props => props.theme.black};
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: stretch;
      @media (max-width: 1300px) {
        grid-template-columns: 1fr;
        justify-content: center;
      }
    }
    .sub-bar {
      display: grid;
      grid-template-columns: 1fr auto;
      border-bottom: 1px solid ${props => props.theme.lightgrey};
    }
  `;
  
  const TachyonDrop = styled.div`
  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }
  .top-1 { top: 1rem; }
  .right-1 { right: 1rem; }
  .bottom-1 { bottom: 1rem; }
  .left-1 { left: 1rem; }
  .top-2 { top: 2rem; }
  .right-2 { right: 2rem; }
  .bottom-2 { bottom: 2rem; }
  .left-2 { left: 2rem; }
  .top--1 { top: -1rem; }
  .right--1 { right: -1rem; }
  .bottom--1 { bottom: -1rem; }
  .left--1 { left: -1rem; }
  .top--2 { top: -2rem; }
  .right--2 { right: -2rem; }
  .bottom--2 { bottom: -2rem; }
  .left--2 { left: -2rem; }
  .absolute--fill { top: 0; right: 0; bottom: 0; left: 0; }
  .bw0 { border-width: 0; }
  .bw1 { border-width: .125rem; }
  .bw2 { border-width: .25rem; }
  .bw3 { border-width: .5rem; }
  .bw4 { border-width: 1rem; }
  .bw5 { border-width: 2rem; }
  /* Resets */
  .bt-0 { border-top-width: 0; }
  .br-0 { border-right-width: 0; }
  .bb-0 { border-bottom-width: 0; }
  .bl-0 { border-left-width: 0; }
  .dn { display: none; }
  .di { display: inline; }
  .db { display: block; }
  .dib { display: inline-block; }
  .dit { display: inline-table; }
  .dt { display: table; }
  .dtc { display: table-cell; }
  .dt-row { display: table-row; }
  .dt-row-group { display: table-row-group; }
  .dt-column { display: table-column; }
  .dt-column-group { display: table-column-group; }
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  /* 1. Fix for Chrome 44 bug.
  * https://code.google.com/p/chromium/issues/detail?id=506893 */
  .flex-auto { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
  .flex-none { flex: none; }
  .flex-column { flex-direction: column; }
  .flex-row { flex-direction: row; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse; }
  .flex-column-reverse { flex-direction: column-reverse; }
  .flex-row-reverse { flex-direction: row-reverse; }
  .items-start { align-items: flex-start; }
  .items-end { align-items: flex-end; }
  .items-center { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch { align-items: stretch; }
  .self-start { align-self: flex-start; }
  .self-end { align-self: flex-end; }
  .self-center { align-self: center; }
  .self-baseline { align-self: baseline; }
  .self-stretch { align-self: stretch; }
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .content-start { align-content: flex-start; }
  .content-end { align-content: flex-end; }
  .content-center { align-content: center; }
  .content-between { align-content: space-between; }
  .content-around { align-content: space-around; }
  .content-stretch { align-content: stretch; }
  .order-0 { order: 0; }
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
  .order-4 { order: 4; }
  .order-5 { order: 5; }
  .order-6 { order: 6; }
  .order-7 { order: 7; }
  .order-8 { order: 8; }
  .order-last { order: 99999; }
  .flex-grow-0 { flex-grow: 0; }
  .flex-grow-1 { flex-grow: 1; }
  .flex-shrink-0 { flex-shrink: 0; }
  .flex-shrink-1 { flex-shrink: 1; }
  .normal { font-weight: normal; }
  .b { font-weight: bold; }
  .fw1 { font-weight: 100; }
  .fw2 { font-weight: 200; }
  .fw3 { font-weight: 300; }
  .fw4 { font-weight: 400; }
  .fw5 { font-weight: 500; }
  .fw6 { font-weight: 600; }
  .fw7 { font-weight: 700; }
  .fw8 { font-weight: 800; }
  .fw9 { font-weight: 900; }
  
  .pa0-l { padding: 0; }
   .pa1-l { padding: .25rem; }
   .pa2-l { padding: .5rem; }
   .pa3-l { padding: 1rem; }
   .pa4-l { padding: 2rem; }
   .pa5-l { padding: 4rem; }
   .pa6-l { padding: 8rem; }
   .pa7-l { padding: 16rem; }
   .pl0-l { padding-left: 0; }
   .pl1-l { padding-left: .25rem; }
   .pl2-l { padding-left: .5rem; }
   .pl3-l { padding-left: 1rem; }
   .pl4-l { padding-left: 2rem; }
   .pl5-l { padding-left: 4rem; }
   .pl6-l { padding-left: 8rem; }
   .pl7-l { padding-left: 16rem; }
   .pr0-l { padding-right: 0; }
   .pr1-l { padding-right: .25rem; }
   .pr2-l { padding-right: .5rem; }
   .pr3-l { padding-right: 1rem; }
   .pr4-l { padding-right: 2rem; }
   .pr5-l { padding-right: 4rem; }
   .pr6-l { padding-right: 8rem; }
   .pr7-l { padding-right: 16rem; }
   .pb0-l { padding-bottom: 0; }
   .pb1-l { padding-bottom: .25rem; }
   .pb2-l { padding-bottom: .5rem; }
   .pb3-l { padding-bottom: 1rem; }
   .pb4-l { padding-bottom: 2rem; }
   .pb5-l { padding-bottom: 4rem; }
   .pb6-l { padding-bottom: 8rem; }
   .pb7-l { padding-bottom: 16rem; }
   .pt0-l { padding-top: 0; }
   .pt1-l { padding-top: .25rem; }
   .pt2-l { padding-top: .5rem; }
   .pt3-l { padding-top: 1rem; }
   .pt4-l { padding-top: 2rem; }
   .pt5-l { padding-top: 4rem; }
   .pt6-l { padding-top: 8rem; }
   .pt7-l { padding-top: 16rem; }
   .pv0-l { padding-top: 0; padding-bottom: 0; }
   .pv1-l { padding-top: .25rem; padding-bottom: .25rem; }
   .pv2-l { padding-top: .5rem; padding-bottom: .5rem; }
   .pv3-l { padding-top: 1rem; padding-bottom: 1rem; }
   .pv4-l { padding-top: 2rem; padding-bottom: 2rem; }
   .pv5-l { padding-top: 4rem; padding-bottom: 4rem; }
   .pv6-l { padding-top: 8rem; padding-bottom: 8rem; }
   .pv7-l { padding-top: 16rem; padding-bottom: 16rem; }
   .ph0-l { padding-left: 0; padding-right: 0; }
   .ph1-l { padding-left: .25rem; padding-right: .25rem; }
   .ph2-l { padding-left: .5rem; padding-right: .5rem; }
   .ph3-l { padding-left: 1rem; padding-right: 1rem; }
   .ph4-l { padding-left: 2rem; padding-right: 2rem; }
   .ph5-l { padding-left: 4rem; padding-right: 4rem; }
   .ph6-l { padding-left: 8rem; padding-right: 8rem; }
   .ph7-l { padding-left: 16rem; padding-right: 16rem; }
   .ma0-l { margin: 0; }
   .ma1-l { margin: .25rem; }
   .ma2-l { margin: .5rem; }
   .ma3-l { margin: 1rem; }
   .ma4-l { margin: 2rem; }
   .ma5-l { margin: 4rem; }
   .ma6-l { margin: 8rem; }
   .ma7-l { margin: 16rem; }
   .ml0-l { margin-left: 0; }
   .ml1-l { margin-left: .25rem; }
   .ml2-l { margin-left: .5rem; }
   .ml3-l { margin-left: 1rem; }
   .ml4-l { margin-left: 2rem; }
   .ml5-l { margin-left: 4rem; }
   .ml6-l { margin-left: 8rem; }
   .ml7-l { margin-left: 16rem; }
   .mr0-l { margin-right: 0; }
   .mr1-l { margin-right: .25rem; }
   .mr2-l { margin-right: .5rem; }
   .mr3-l { margin-right: 1rem; }
   .mr4-l { margin-right: 2rem; }
   .mr5-l { margin-right: 4rem; }
   .mr6-l { margin-right: 8rem; }
   .mr7-l { margin-right: 16rem; }
   .mb0-l { margin-bottom: 0; }
   .mb1-l { margin-bottom: .25rem; }
   .mb2-l { margin-bottom: .5rem; }
   .mb3-l { margin-bottom: 1rem; }
   .mb4-l { margin-bottom: 2rem; }
   .mb5-l { margin-bottom: 4rem; }
   .mb6-l { margin-bottom: 8rem; }
   .mb7-l { margin-bottom: 16rem; }
   .mt0-l { margin-top: 0; }
   .mt1-l { margin-top: .25rem; }
   .mt2-l { margin-top: .5rem; }
   .mt3-l { margin-top: 1rem; }
   .mt4-l { margin-top: 2rem; }
   .mt5-l { margin-top: 4rem; }
   .mt6-l { margin-top: 8rem; }
   .mt7-l { margin-top: 16rem; }
   .mv0-l { margin-top: 0; margin-bottom: 0; }
   .mv1-l { margin-top: .25rem; margin-bottom: .25rem; }
   .mv2-l { margin-top: .5rem; margin-bottom: .5rem; }
   .mv3-l { margin-top: 1rem; margin-bottom: 1rem; }
   .mv4-l { margin-top: 2rem; margin-bottom: 2rem; }
   .mv5-l { margin-top: 4rem; margin-bottom: 4rem; }
   .mv6-l { margin-top: 8rem; margin-bottom: 8rem; }
   .mv7-l { margin-top: 16rem; margin-bottom: 16rem; }
   .mh0-l { margin-left: 0; margin-right: 0; }
   .mh1-l { margin-left: .25rem; margin-right: .25rem; }
   .mh2-l { margin-left: .5rem; margin-right: .5rem; }
   .mh3-l { margin-left: 1rem; margin-right: 1rem; }
   .mh4-l { margin-left: 2rem; margin-right: 2rem; }
   .mh5-l { margin-left: 4rem; margin-right: 4rem; }
   .mh6-l { margin-left: 8rem; margin-right: 8rem; }
   .mh7-l { margin-left: 16rem; margin-right: 16rem; }
   .na1-l { margin: -0.25rem; }
   .na2-l { margin: -0.5rem; }
   .na3-l { margin: -1rem; }
   .na4-l { margin: -2rem; }
   .na5-l { margin: -4rem; }
   .na6-l { margin: -8rem; }
   .na7-l { margin: -16rem; }
   .nl1-l { margin-left: -0.25rem; }
   .nl2-l { margin-left: -0.5rem; }
   .nl3-l { margin-left: -1rem; }
   .nl4-l { margin-left: -2rem; }
   .nl5-l { margin-left: -4rem; }
   .nl6-l { margin-left: -8rem; }
   .nl7-l { margin-left: -16rem; }
   .nr1-l { margin-right: -0.25rem; }
   .nr2-l { margin-right: -0.5rem; }
   .nr3-l { margin-right: -1rem; }
   .nr4-l { margin-right: -2rem; }
   .nr5-l { margin-right: -4rem; }
   .nr6-l { margin-right: -8rem; }
   .nr7-l { margin-right: -16rem; }
   .nb1-l { margin-bottom: -0.25rem; }
   .nb2-l { margin-bottom: -0.5rem; }
   .nb3-l { margin-bottom: -1rem; }
   .nb4-l { margin-bottom: -2rem; }
   .nb5-l { margin-bottom: -4rem; }
   .nb6-l { margin-bottom: -8rem; }
   .nb7-l { margin-bottom: -16rem; }
   .nt1-l { margin-top: -0.25rem; }
   .nt2-l { margin-top: -0.5rem; }
   .nt3-l { margin-top: -1rem; }
   .nt4-l { margin-top: -2rem; }
   .nt5-l { margin-top: -4rem; }
   .nt6-l { margin-top: -8rem; }
   .nt7-l { margin-top: -16rem; }
   .strike-l { text-decoration: line-through; }
   .underline-l { text-decoration: underline; }
   .no-underline-l { text-decoration: none; }
   .tl-l { text-align: left; }
   .tr-l { text-align: right; }
   .tc-l { text-align: center; }
   .tj-l { text-align: justify; }
   .ttc-l { text-transform: capitalize; }
   .ttl-l { text-transform: lowercase; }
   .ttu-l { text-transform: uppercase; }
   .ttn-l { text-transform: none; }
   .f-6-l, .f-headline-l { font-size: 6rem; }
   .f-5-l, .f-subheadline-l { font-size: 5rem; }
   .f1-l { font-size: 3rem; }
   .f2-l { font-size: 2.25rem; }
   .f3-l { font-size: 1.5rem; }
   .f4-l { font-size: 1.25rem; }
   .f5-l { font-size: 1rem; }
   .f6-l { font-size: .875rem; }
   .f7-l { font-size: .75rem; }
   .measure-l { max-width: 30em; }
   .measure-wide-l { max-width: 34em; }
   .measure-narrow-l { max-width: 20em; }
   .indent-l { text-indent: 1em; margin-top: 0; margin-bottom: 0; }
   .small-caps-l { font-variant: small-caps; }
   .truncate-l { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
   .center-l { margin-right: auto; margin-left: auto; }
   .mr-auto-l { margin-right: auto; }
   .ml-auto-l { margin-left: auto; }
   .clip-l { position: fixed !important; _position: absolute !important; clip: rect( 1px 1px 1px 1px ); /* IE6, IE7 */ clip: rect( 1px, 1px, 1px, 1px ); }
   .ws-normal-l { white-space: normal; }
   .nowrap-l { white-space: nowrap; }
   .pre-l { white-space: pre; }
   .v-base-l { vertical-align: baseline; }
   .v-mid-l { vertical-align: middle; }
   .v-top-l { vertical-align: top; }
   .v-btm-l { vertical-align: bottom; }
  
   .dn { display: none; }
  .di { display: inline; }
  .db { display: block; }
  .dib { display: inline-block; }
  .dit { display: inline-table; }
  .dt { display: table; }
  .dtc { display: table-cell; }
  .dt-row { display: table-row; }
  .dt-row-group { display: table-row-group; }
  .dt-column { display: table-column; }
  .dt-column-group { display: table-column-group; }
  
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  /* 1. Fix for Chrome 44 bug.
   * https://code.google.com/p/chromium/issues/detail?id=506893 */
  .flex-auto { flex: 1 1 auto; min-width: 0; /* 1 */ min-height: 0; /* 1 */ }
  .flex-none { flex: none; }
  .flex-column { flex-direction: column; }
  .flex-row { flex-direction: row; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse; }
  .flex-column-reverse { flex-direction: column-reverse; }
  .flex-row-reverse { flex-direction: row-reverse; }
  .items-start { align-items: flex-start; }
  .items-end { align-items: flex-end; }
  .items-center { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch { align-items: stretch; }
  .self-start { align-self: flex-start; }
  .self-end { align-self: flex-end; }
  .self-center { align-self: center; }
  .self-baseline { align-self: baseline; }
  .self-stretch { align-self: stretch; }
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .content-start { align-content: flex-start; }
  .content-end { align-content: flex-end; }
  .content-center { align-content: center; }
  .content-between { align-content: space-between; }
  .content-around { align-content: space-around; }
  .content-stretch { align-content: stretch; }
  .order-0 { order: 0; }
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
  .order-4 { order: 4; }
  .order-5 { order: 5; }
  .order-6 { order: 6; }
  .order-7 { order: 7; }
  .order-8 { order: 8; }
  .order-last { order: 99999; }
  .flex-grow-0 { flex-grow: 0; }
  .flex-grow-1 { flex-grow: 1; }
  .flex-shrink-0 { flex-shrink: 0; }
  .flex-shrink-1 { flex-shrink: 1; }
  `;
  
  const SecondBar = styled.div`
  
    background-color: #fd6a02;
    padding: 10px 0 15px 0;
    color: #fff;
  
    a{ 
      color: #fff;
      text-decoration: none;
      margin-top: -2px;
    
    }
  
    nav > a {
      font-size: 1.3em;
      
        
      }
    }
    @media screen and (max-width:600px){
        nav a {
          padding: inherit;
          margin-left: -3em

      }
      }
    nav a:hover {
      color: #000;
      /* font-weight: bold; */
      text-transform: uppercase;
      animation: doItBaby 1 0.54s;
    }
  
      
    @keyframes doItBaby {
      0% {
        font-weight:normal;
        text-transform:lowercase;
      }
      100%{
        font-weight:bold;
        text-transform:uppercase;
      }
    }
  `;

const NavBar = () => {
  return (
    <>
   

      {/* <h1>homepage</h1> */}
      <StyledHeader>
    {/* <div className="bar" style=>
      
      
      </div>
      <div className="sub-bar">
      
    </div> */}
     <TachyonDrop>
      <div className="yellow-block" style={{width: '1.32em',
height:'9em',
background: '#ffd800',
display: 'flex',
flexDirection: 'column',
top:'36.75vh',
left:'0',
position: 'absolute',
zIndex: '-1',}}>

      </div>

      <div className="orange-block" style={{width: '1.32em',
height:'9em',
background: '#fd6a02',
display: 'flex',
flexDirection: 'column',
top:'19.5vh',
left:'0',
position: 'absolute',
zIndex: '-1',}}>

      </div>

      <div className="red-block" style={{width: '1.32em',
height:'9em',
background: 'red',
display: 'flex',
flexDirection: 'column',
left:'0',
position: 'absolute',
zIndex: '-1',}}>



      </div>
     
      

      <div className="bg-yc-light vw-100 vh-100 ph3-l">
  <div className="mw8 center">
    <header className="bg-yc-orange w-100 flex flex-row-l flex-column white" id="header">
    <div className="blue-block" style={{width: '75vw',
height:'50em',
// backgroundColor: '#18afb6',
// backgroundImage: "url(https://dl3.pushbulletusercontent.com/TBBHLhVz04tlfk7qtzaN5CcSaDbtK0tu/Untitled%20%281%29.jpg)",
// background: 'url(https://dl3.pushbulletusercontent.com/TBBHLhVz04tlfk7qtzaN5CcSaDbtK0tu/Untitled%20%281%29.jpg)',
display: 'flex',
flexDirection: 'column',
top:'14vh',
left:'50%',
transform:'translate3d(-50%,0,0)',
filter:'contrast(190%)',
opacity: '0.68',

backgroundRepeat:'no-repeat',
backgroundSize: 'cover',
position: 'absolute',
zIndex: '999',}}>

      </div>
      <div className="flex mobile-center" >
        <div className="flex-none">
          <Link to="/">
          <a 
         target="_blank" rel="nofollow noopener">
          <img className="flex" src="https://blog.ycombinator.com/wp-content/uploads/2016/11/YC-square-logo-50.svg" width="40" height="40"/></a>
        </Link></div>
        <form className="ma0 bt bb b--orange flex-auto" action="">
          <input style={{height: '6vh',width:'32vw',fontSize: '1.15em'}} className="bn pl3 outline-0 helvetica avenir fw3 orange" type="search" name="s" placeholder="Search"/>
          <button style={{height:'6vh',width:'8vw',marginTop:'-2px',fontSize:'1.25em'}} type="submit"><strong>&rarr;</strong></button>
        </form>
        <div className="flex-auto flex-l "></div>
       
      </div>
      <div className="flex-auto-l"></div>
      <SecondBar>
      <nav 
      className="flex-l flex-row-l " 
      style={{display:'flex',justifyContent:'space-between',maxWidth:'50vw',marginLeft:'32vw'}} >
        {/* <Link>
      </Link> */}
        <Link to="/">
        <a 
        className="dib ph3 pv3 pv0-l flex items-center hover-bg-black bl-l bb bb-0-l white no-underline w-100 w-auto-l" 
        // href="https://blog.ycombinator.com/research" 
        target="_blank" rel="noopener nofollow">HomePage</a>
        </Link>
        <Link to="/onepage">
        <a 
        className="dib ph3 pv3 pv0-l flex items-center hover-bg-black bl-l bb bb-0-l white no-underline w-100 w-auto-l" 
        // href="http://eepurl.com/cbJZnj" 
        target="_blank" 
        rel="noopener nofollow">OnePage</a>
        </Link>
        <Link to="/twopage">
        <a 
        className="dib ph3 pv3 pv0-l flex items-center hover-bg-black bl-l bb bb-0-l white no-underline w-100 w-auto-l" 
        // href="http://www.ycombinator.com/about/" 
        target="_blank" rel="noopener nofollow">TwoPage</a>
        </Link>
        <Link to="/donate">
        <a className="dib ph3 pv3 pv0-l flex items-center hover-bg-black bl-l bb bb-0-l white no-underline w-100 w-auto-l" 
        // href="http://www.ycombinator.com/apply/" 
        target="_blank" rel="noopener nofollow">Donate</a>
        </Link>
      </nav>
      </SecondBar>
    </header>
    {/* <main className="helvetica avenir mv5-l mv3 pa3">
      <h1 className="mt0 mb2">Y Combinator Blog Header</h1>
      <p className="mt0 mb4">As seen on <a className="yc-orange no-underline underline-hover" href="https://blog.ycombinator.com" target="_blank" rel="nofollow noopener">Original Website</a></p>
      <h2 className="mt3 mb2">Credits</h2>
      <ul className="lh-copy ma0 pa0 list">
      <li className="mb2">Logo: <a className="yc-orange no-underline underline-hover" href="https://www.ycombinator.com/" target="_blank" rel="nofollow noopener">Y Combinator</a></li>
      <li className="mb2">CSS: <a className="yc-orange no-underline underline-hover" href="http://tachyons.io" target="_blank" rel="nofollow noopener">Tachyons</a></li>
      <li className="mb2">JS: <a className="yc-orange no-underline underline-hover" href="https://vuejs.org" target="_blank" rel="nofollow noopener">Vue JS</a></li>
      <li className="mb2">Icons: <a className="yc-orange no-underline underline-hover" href="https://nucleoapp.com/" target="_blank" rel="nofollow noopener">Nucleo</a></li>
      </ul>
    </main> */}
  </div>
</div>

      
      </TachyonDrop>

  </StyledHeader>

    
    </>
  )
}

export default NavBar

// const Header = () => (
  
// );






