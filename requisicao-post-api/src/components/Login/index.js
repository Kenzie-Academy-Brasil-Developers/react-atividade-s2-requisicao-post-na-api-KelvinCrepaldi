import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Newform } from "./styled";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const Login = ({ setuserAllowed }) => {
  const [response, setResponse] = useState({});
  const [failLogin, setFailLogin] = useState(false);

  const formSchema = yup.object().shape({
    username: yup.string().required("É necessario um nome de usuario."),
    password: yup.string().required("É necessario uma senha."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    setFailLogin(false);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setResponse(response);
        setuserAllowed(true);
      })
      .catch((err) => {
        setFailLogin(true);
      });
  };

  return (
    <>
      <div>
        <h1>Login de usuário:</h1>
        <Newform className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input
            type="text"
            placeholder="Usuário"
            {...register("username")}
          ></input>
          {<p>{errors.username?.message}</p>}
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          ></input>
          {<p>{errors.password?.message}</p>}
          {failLogin && <p>Erro no login. Usuário ou senha não encontrado.</p>}
          <button type="submit">Acessar</button>
        </Newform>
      </div>
    </>
  );
};

export default Login;
