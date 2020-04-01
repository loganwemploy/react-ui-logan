import React from 'react';
import definitionContent from './definition-content.js';
// import definitions from './definition-content.js';
import styled from 'styled-components';

const MyDefinitCard = styled.div`
margin:auto;
position: fixed;
left:50%;
transform:translate3d(-50%,33%,0);
.design {
	background-color: #cccccc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ff1818' fill-opacity='0.04'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	width: 550px;
	border: 1px solid #ddd;
	box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 5px 20px rgba(0,0,0,0.1);
	padding: 20px;
	overflow: visible !important;
	.alphabet {
		text-align: right;
		font-weight: 700;
		font-size: 34px;
		text-transform: capitalize;
		letter-spacing: 2px;
	}
	section {
		padding: 0 35px;
		margin-top: 6em;
	}
	.word {
		font: 700 45px/.9 'Libre Baskerville', serif;
		word-break: break-all;
	}
	.type {
		font: italic 500 28px 'Libre Baskerville', serif;
		margin: 10px 0;
	}
	.context {
		margin: 25px 0;
		width: 90%;
	}
  
`;



const DefinitionsPage = ({ match }) => {
  const name = match.params.name;
  const definition = definitionContent.find(definition => definition.name === name);
  
  if(!definition) return <h1> ohno, article doesn't exist</h1>

  return (
    <>
    <MyDefinitCard>
    <section className="design">
    <div className="alphabet js-alphabet">Hi Katy</div>
    <section>
      <div className="word js-word">{definition.name}</div>
      <div className="type js-type">(noun)</div>
      <p className="context js-explanation">{definition.content}</p>
      <p className="see-also">
         (see also: <strong className="js-name">{definition.description}</strong>)</p>
     
      
        
    </section>
    
    </section>


    </MyDefinitCard>
    </>
  );
}

export default DefinitionsPage;

