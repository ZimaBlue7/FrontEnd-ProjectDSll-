import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-yellow-400 to-stone-800 h-screen text-black flex  ">
      <div className="w-full max-w-xs m-auto ">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-fold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@company.ltd"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Registrarse
          </button>
        </form>

        <p className="my-4 text-sm flex font-bold justify-between px-3">
          ¿Ya tienes cuenta?<Link to="/login">Inicia sesion</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
