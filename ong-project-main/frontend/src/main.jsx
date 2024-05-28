import React, { createContext, useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider,  Navigate } from "react-router-dom";
import App from "./App.jsx";
import axios from "axios";

import Home from "./routes/Home.jsx";
import Ongs from "./routes/Ongs.jsx";
import Beneficiarios from "./routes/Beneficiarios.jsx";
import BuscarFamilias from "./routes/BuscarFamilias.jsx";
import Login from "./routes/Login.jsx";
import Familias from "./routes/Familias.jsx";

import { baseURL } from "./services/baseURL.js";

export const AuthContext = createContext();
export const UseID = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseIDProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const responseBeneficiarios = await axios.get(
        `${baseURL}/beneficiario/listar/`
      );
      const responseFamilias = await axios.get(
        `${baseURL}/familias/listar-familias`
      );

      const beneficiarios = responseBeneficiarios.data;
      const familias = responseFamilias.data;

      if (beneficiarios.length > 0 && familias.length > 0) {
        const newData = [];

        for (const beneficiario of beneficiarios) {
          const familia = familias.find(
            (f) => f.id_familia === beneficiario.id_familia.id_familia
          );

          try {
            const response = await axios.get(
              `${baseURL}/coletas/buscar/` +
                beneficiario.id_familia.id_familia
            );
            if (response.data.length > 0) {
              const ultimaColeta = response.data[response.data.length - 1];
              if (familia.id_ong.id_ong === id) {
                newData.push({
                  ...beneficiario,
                  ...familia,
                  ...ultimaColeta,
                });
              }
            } else {
              if (familia.id_ong.id_ong === id) {
                newData.push({
                  ...beneficiario,
                  ...familia,
                });
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <UseID.Provider
      value={{
        id,
        setId,
        data,
        setData,
        selectedItem,
        setSelectedItem,
        fetchData,
      }}
    >
      {children}
    </UseID.Provider>
  );
};

function ProtectedRoute({ element, ...rest }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? element : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: "/ongs",
        element: <ProtectedRoute element={<Ongs />} />,
      },
      {
        path: "/beneficiarios",
        element: <ProtectedRoute element={<Beneficiarios />} />,
      },
      {
        path: "/buscarfamilias",
        element: <ProtectedRoute element={<BuscarFamilias />} />,
      },
      {
        path: "/familias",
        element: <ProtectedRoute element={<Familias />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseIDProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </UseIDProvider>
  </React.StrictMode>
);
