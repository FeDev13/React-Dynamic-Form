import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("data").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, datos: doc.data() }))); //**metodo de firebase que trae los datos de la db con la id y los demas datos en un objeto */
    });
  }, []);

  console.log(data);
  return (
    <div className=" bg-white">
      <h1 className="  text-center text-2xl font-bold mt-8 mb-20">Datos</h1>
      <NavLink to="/">
        <Button size="md" className="bg-black text-white mx-auto flex">
          Volver
        </Button>
      </NavLink>

      <div className="grid grid-cols-3">
        {data.map((datos, index) => {
          //**render dinamico de los datos de la db **/
          return (
            <div key={index}>
              <div className="block p-6 rounded-lg shadow-lg max-w-sm my-8 bg-slate-100">
                <h5 className="text-gray-900 text-base leading-tight font-medium mb-2">
                  Nombre completo: {datos.datos.text}
                  {/* luego del map se accede a los datos dentro del objeto "datos" y se muestran*/}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Correo electronico: {datos.datos.email}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Fecha de nacimiento: {datos.datos.date}
                </p>

                <p className="text-gray-700 text-base mb-4">
                  Pais de origen: {datos.datos.country}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;
