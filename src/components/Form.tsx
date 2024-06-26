import { useState } from 'react';
import { INICIAL_STATES, FormTypes } from './types';

type FormProps = {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>
  handleForm: (event: React.FormEvent<HTMLFormElement>, form: FormTypes) => void;
};

function Form({ setDisplayForm, handleForm }: FormProps) {
  const regexStringNumber = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
  const regexSpecial = /[^a-zA-Z 0-9]+/;
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const [form, setForm] = useState(INICIAL_STATES);
  const [screenPassword, setScreenPassword] = useState(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function validateForm() {
    const validService = form.service.length > 0;
    const validLogin = form.login.length > 0;
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).+$/;
    const validPassword = regex.test(form.password)
      && form.password.length > 7 && form.password.length < 15;
    return validService && validLogin && validPassword;
  }

  return (
    <form onSubmit={ (event) => handleForm(event, form) }>
      <label>
        Nome do serviço
        <input
          type="text"
          name="service"
          value={ form.service }
          onChange={ handleChange }
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name="login"
          value={ form.login }
          onChange={ handleChange }
        />
      </label>
      <label>
        Senha
        <input
          type={
            screenPassword
              ? 'password'
              : 'text'
          }
          name="password"
          value={ form.password }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="button-password">
        <button
          id="button-password"
          data-testid="show-hide-form-password"
          type="button"
          onClick={ () => setScreenPassword(!screenPassword) }
        >
          Mostrar Senha
        </button>
      </label>
      <section id="message-password">
        Sua senha deve:
        <p className={ form.password.length > 7 ? valid : invalid }>
          Possuir 8 ou mais caracteres
        </p>
        <p className={ form.password.length < 15 ? valid : invalid }>
          Possuir até 16 caracteres
        </p>
        <p className={ regexStringNumber.test(form.password) ? valid : invalid }>
          Possuir letras e números
        </p>
        <p className={ regexSpecial.test(form.password) ? valid : invalid }>
          Possuir algum caractere especial
        </p>
      </section>
      <label htmlFor="url">
        URL
        <input
          type="text"
          name="url"
          id="url"
          value={ form.url }
          onChange={ handleChange }
        />
      </label>
      <button type="submit" disabled={ !validateForm() }>Cadastrar</button>
      <button type="button" onClick={ () => setDisplayForm(true) }>Cancelar</button>
    </form>
  );
}

export default Form;
