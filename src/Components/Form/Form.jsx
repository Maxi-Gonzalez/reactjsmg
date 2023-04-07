import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 5) {
      console.log("nombre no valido");
      return;
    }

    const incluye = userData.email.includes("@");

    if (!incluye) {
      console.log("email no valido");
      return;
    }

    const str = userData.password.trim;
    const passwordIsValid = userData.password=== str;

    if (!passwordIsValid || userData.password.length <5) {
      console.log("contrasena no debe tener espacios en blanco ni menos de 5 de caracteres");
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese nombre "
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="ingrese email "
          onChange={handleChange}
          name="email"
        />

        <input
          type="password"
          placeholder="ingrese password "
          onChange={handleChange}
          name="password"
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
