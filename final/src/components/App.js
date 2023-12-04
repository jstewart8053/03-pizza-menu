import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Order from "./Order";
import Pizza from "./Pizza";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
