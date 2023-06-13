import { FormTypesId } from './types';

type NewServiceProp = {
  list: FormTypesId;
  handleDelete: (() => void);
  Password: boolean;
};

function NewService({ list, handleDelete, Password }: NewServiceProp) {
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
        {
            Password
              ? <span>******</span>
              : <span>{ password}</span>
          }
      </div>
    </>
  );
}

export default NewService;
