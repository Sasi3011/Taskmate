import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';

function App() {
  return (
    <div className="container">
        <Header />
        <AddTask />
        <ShowTask />
    </div>
    );
}
export default App;  