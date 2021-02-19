import Form from './components/form/Form'
import Result from './components/result/Result';
import './App.css';

const apiKey = '93ff829608b842116f66ee2c07d4b476'
function App() {
  return (
    <div className="App">
     Weather App
     <Form/>
     <Result/>
    </div>
  );
}

export default App;
