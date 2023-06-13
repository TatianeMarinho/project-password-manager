import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { FormTypesId, FormTypes } from './components/types';
import NewService from './components/NewService';
import ScreenPasswordBtn from './components/ScreenPasswordBtn';

function App() {
  const [displayForm, setDisplayForm] = useState(true);
  const [passwordArray, setpasswordArray] = useState<FormTypesId[]>([]);
  const [screenCheckedPassword, setScreenCheckedPassword] = useState(false);

  function handleClick() {
    setDisplayForm(false);
  }

  const handlePassword = (event: React.FormEvent<HTMLFormElement>, form: FormTypes) => {
    event.preventDefault();
    const passwordId = { ...form, id: Date.now() };

    setpasswordArray([...passwordArray, { ...passwordId }]);

    setDisplayForm(true);
  };

  const handleDeleteService = (id: string | number) => {
    const filterPassword = passwordArray.filter((password) => password.id !== id);
    setpasswordArray(filterPassword);
  };

  const handleScreenPasswordBtn = () => {
    setScreenCheckedPassword(!screenCheckedPassword);
  };

  return (
    <main>
      <Title />
      {
        displayForm
          ? (<button onClick={ handleClick }>cadastrar nova senha</button>)
          : (<Form
              setDisplayForm={ setDisplayForm }
              handleForm={ handlePassword }
          />)
      }
      <div className="list-service">
        {
          passwordArray.length === 0
            && (<div>Nenhuma senha cadastrada</div>)
        }
        {
          passwordArray.length > 0
          && (<ScreenPasswordBtn
            handleScreenPasswordBtn={ handleScreenPasswordBtn }
          />)
        }
        {
          passwordArray.length > 0
          && (passwordArray.map((password) => (
            <NewService
              key={ password.id }
              list={ password }
              handleDelete={ () => { handleDeleteService(password.id); } }
              Password={ screenCheckedPassword }
            />)))
        }
      </div>
    </main>
  );
}

export default App;
