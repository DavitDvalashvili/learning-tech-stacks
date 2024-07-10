import styled, { createGlobalStyle } from "styled-components";
import Title from "./components/Title";


const GlobalStyles = createGlobalStyle`
body {
  background-color: orange;
}
`;



function App() {



  return (
    <>
      <GlobalStyles/>
      <Title primary={true} color="red" >test</Title>
    </>
  );
}

export default App;


type TitleProps = { primary: boolean }





//ასე ხდება სტაილ კომპონენეტების იქსთენდინგი.
const secondTitle = styled(Title)`
  color: green;
  border-color: yellow;
`
