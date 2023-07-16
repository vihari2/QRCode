//import style
import "./styless.css";
import Frase from "../../components/Frase";
import Code from "../../components/Code";

function Qrcode() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Code />
        </div>
        <Frase />
      </header>
    </div>
  );
}

export default Qrcode;
