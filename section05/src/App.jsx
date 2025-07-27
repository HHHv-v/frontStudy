import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// const Header = () =>{

//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

function App() {
  // 부모 component, root component render 메서드의 인수로 전달
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
