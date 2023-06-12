import { FormTypesId } from './types';

type NewServiceProp = {
  list: FormTypesId;
  handleDelete: (() => void);
};

function NewService({ list, handleDelete }: NewServiceProp) {
  const { service, login, password, url } = list;

  return (
    <>
      <div className="delete">
        <button data-testid="remove-btn" onClick={ () => handleDelete() }>x</button>
      </div>
      <a href={ url } target="_blank" rel="noreferrer">
        { service }
      </a>
      <div>
        Login:
        {' '}
        <span>
          { login }
        </span>
      </div>
      <div>
        Senha:
        {' '}
        <span>
          { password }
        </span>
      </div>
      <label>
        Esconder senhas
        <input
          type="checkbox"
          name="screenPassword"
          id="screenPassword"
        />
      </label>
    </>

  );
}

export default NewService;
