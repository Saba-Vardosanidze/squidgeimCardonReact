import "./reset.css";
import "./global.css";
import Card from "./card/Card";
import Header from "./header/Header";
import "./App.css";
import Section from "./Section/Section";

function App() {
  return (
    <div>
      <Card>
        <Header />
        <Section />
      </Card>
    </div>
  );
}

export default App;
