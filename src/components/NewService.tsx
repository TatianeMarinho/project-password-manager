import FormTypes from './types';

type NewServiceProp = {
  typeService: FormTypes;
};

function NewService({ typeService }: NewServiceProp) {
  const { service, login, password, url } = typeService;

  return (
    <section>
      <a href={ url } target="_blank" rel="noreferrer noopener">
        { service }
      </a>
      <p>
        Login:
        {' '}
        { login }
      </p>
      <p>
        Senha:
        {' '}
        { password }
      </p>
    </section>
  );
}

export default NewService;
