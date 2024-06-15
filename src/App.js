import "./App.css";
import HorizontalScroll from "./Components/HorizontalScroll/HorizontalScroll";
import Section from "./Components/Section/Section";

function App() {
    return (
        <div className="App">
            <Section title="Light rail photography" />
            <HorizontalScroll />
            <Section title="End of the gallery" />
        </div>
    );
}

export default App;
