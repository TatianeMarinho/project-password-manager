import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [displayForm, setDisplayForm] = useState(true);

  function handleClick() {
    setDisplayForm(false);
  }

  return (
    <main>
      <Title />
      {
        displayForm
          ? (<button onClick={ handleClick }>Cadastrar nova senha</button>)
          : (<Form setDisplayForm={ setDisplayForm } />)
      }
    </main>
  );
}

export default App;
