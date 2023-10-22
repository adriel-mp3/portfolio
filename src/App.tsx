import Header from "@/layout/Header";
import Home from "@/pages/Home";
import Footer from "./layout/Footer";
import { headerLinks } from "./utils/headerLinks";
import { socialNetworks } from "./utils/socialNetworks";

function App() {
  return (
    <div>
      <Header headerLinks={headerLinks} />
      <Home />
      <Footer socialNetworks={socialNetworks} />
    </div>
  );
}

export default App;
