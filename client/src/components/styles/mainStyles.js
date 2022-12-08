import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
// custom styling
// tweak existing style

// export const NameOfTheStyledComponent = styled.htmlElement`
//   css styles will go here
// `

// export const NameOfTheStyledComponent = styled(Element you want to style)`
//   css styles will go here
// `

// !important
// border: none !important;

export const MainBtn = styled.button`
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 35px;
  font-size: 12px;
`

// export const SubmitBtn = styled.button`
//   color: white;
//   background: #18A0FB;
//   border-radius: 5px;
// `

// export const EditBtn = styled.button`
//   color: white;
//   background: yellow;
//   border-radius: 5px;
// `
export const SubmitBtn = styled(MainBtn)`
  background: #18A0FB;
`

export const EditBtn = styled(MainBtn)`
  background: #FAD35D;
`

// if I pass in a size, it will change the 
// text size accordingly

const customSize = (size) => {
  if ( size === 'sm') {
    return '8px'
  } else if (size === 'lrg') {
    return '32px'
  } else if (size === 'xl') {
    return '64px'
  } else {
    return '16px'
  }
}

export const MainTitle = styled.h1`
  font-size: ${ props => customSize(props.size) };
`

export const MainNavLink = styled(Link)`
  text-decoration: none;
  color: ${ props => props.color };

  &:hover {
    text-decoration: underline;
  }
`

export const MainHeadSection = styled.div`
  font-size: 64px;
  margin: 20% 0;
`

export const MainHeadSubTitle = styled.h3`
  font-size: 16px;
  padding: 10px 250px;
  text-align: center
`

export const PriceBox = styled(Col)`
  border: 1px solid black;
  text-align: center;
  margin: 30px 80px;
  padding: 50px;
`