import './Styles/App.css';
import CodeEditor from './Components/CodeEditor';
import CodeResult from './Components/CodeResult';

function App() {

  return (
    <div className="App">
      <div id='main-ctn'>
        <CodeEditor />
        <CodeResult />
      </div>
    </div>
  )
}

export default App
