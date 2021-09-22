const Display = ({ userAllowed }) => {
  return (
    <>
      {userAllowed ? (
        <p style={{ color: "green" }}>Usuário habilitado</p>
      ) : (
        <p style={{ color: "red" }}>Usuário desabilitado</p>
      )}
    </>
  );
};

export default Display;
