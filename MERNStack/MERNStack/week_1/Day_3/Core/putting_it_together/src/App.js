import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person=[{firs_name:'Jane',last_name:'Doe',age:45,hair_color:'Black'},
  {firs_name:'John',last_name:'Smith',age:88,hair_color:'Brown'}]
return (
<div className="App">
{person.map((person,idx)=> <PersonCard key={idx} person={person} />)}
</div>
);
}

export default App;
