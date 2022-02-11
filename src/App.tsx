import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Latest from "./components/Latest/Latest";
import Pros from "./components/Pros/Pros";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

html{
  font-family: 'Public Sans', sans-serif;
  font-size: 18px;

}

:root {
  --color-dark-blue: hsl(233, 26%, 24%);
  --color-lime-green: hsl(136, 65%, 51%);
  --color-bright-cyan: hsl(192, 70%, 51%);
  --color-grayish-blue: hsl(233, 8%, 62%);
  --color-light-grayish-blue: hsl(220, 16%, 96%);
  --color-very-light-gray: hsl(0, 0%, 98%);
  --color-white: hsl(0, 0%, 100%);
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Hero />
        <Pros />
        <Latest />
        <Footer />
      </div>
    </>
  );
}

export default App;
