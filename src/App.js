import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="contanier">
      <div className="genel">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <Todolist/>
        </div>
      </div>
    </div>
  );
}

export default App;
