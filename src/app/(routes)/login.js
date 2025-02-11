import { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default function LoginBox() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-box">
      <h2>ORANGE</h2>
      <div className="input-container">
        <label>E-Mail</label>
        <input type="email" placeholder="seunome@email.com" />
        <AiOutlineMail className="icon"/>
      </div>
      <div className="input-container">
        <label>Senha</label>
        <input type={showPassword ? "text" : "password"} placeholder="Password" />
        <AiOutlineLock className="icon" />
      </div>
      <div className="show-password">
          <input type="checkbox" id="showPassword" onChange={() => setShowPassword(!showPassword)} />
          <label htmlFor="showPassword">Mostrar a senha</label>
        </div>
      <p className="anyProblem"><a href="#">Problemas para acessar sua conta?</a></p>
      <button className="button">Acessar</button>
      <div className="divider">
        <hr />
        <span>OU</span>
        <hr />
      </div>
      <button className="button secondary">Cadastrar</button>
      <div className="terms">Termos de uso • Política de privacidade</div>
    </div>
  );
}