type ScreenPasswordBtnProps = {
  handleScreenPasswordBtn: () => void;
};

function ScreenPasswordBtn({ handleScreenPasswordBtn }: ScreenPasswordBtnProps) {
  return (
    <>
      <h2>Lista de Senhas</h2>
      <label>
        Esconder senhas
        <input
          type="checkbox"
          name="screenPassword"
          id="screenPassword"
          onClick={ handleScreenPasswordBtn }
        />
      </label>
    </>
  );
}
export default ScreenPasswordBtn;
