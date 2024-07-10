import styled from "styled-components";




interface TitleProps2 {
  color: string;
}

const Title = styled.h1<TitleProps2>`
  font-size: 50px;
  background-color: green;
  ${(props) => `
  font-size: 60px;
  color: ${props.color};
  `}

`;

export default Title;