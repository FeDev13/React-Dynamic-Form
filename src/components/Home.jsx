import React from "react";
import test from "../db.json";
import { db } from "../firebase";
import { useState } from "react";
import Data from "../components/Data";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [terms, setTerms] = useState(false);
  const message = () => toast("Datos enviados correctamente");

  //*funcion para el checkbox */
  const handleTerms = () => {
    setTerms(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("data")
      .add({
        //*metodo que agrega a firebase los estados seteados que agarra del form */
        text: text,
        email: email,
        date: date,
        country: country,
        terms: terms,
      })
      .then(() => {
        message();
        window.location.href = "http://localhost:3000/data";
      })

      .catch((error) => {
        alert(error.message);
      });

    setText("");
    setEmail("");
    setCountry("");
    setDate("");
  };

  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  uppercase">
            Completa el formulario
          </h1>
          <Toaster />
          <form className="mt-6">
            <div className="mb-2">
              {test.items.map((item) => {
                //*map sobre el json*//
                switch (
                  item.type //*con switch agarro los type del json y al matchear por cada case devuelve un elemento input *//
                ) {
                  case "text":
                    return (
                      <>
                        <label
                          htmlFor={item.name}
                          className="after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                          {item.label}
                        </label>
                        <input
                          className=" w-full
                        block px-16 py-2 my-6 mb-10
                         border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50 bg-slate-200
                    "
                          type={item.type}
                          required={item.required}
                          name={item.name}
                          value={text}
                          onChange={(e) => {
                            setText(e.target.value);
                          }}
                        />
                      </>
                    );

                  case "email":
                    return (
                      <>
                        <label
                          htmlFor={item.name}
                          className="after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                          {item.label}
                        </label>
                        <input
                          className=" w-full
                        block px-16 py-2 mt-6 mb-10
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50 bg-slate-200
                    "
                          type={item.type}
                          required={item.required}
                          name={item.name}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </>
                    );

                  case "date":
                    return (
                      <>
                        <label
                          htmlFor={item.name}
                          className="after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                          {item.label}
                        </label>
                        <input
                          className=" w-full
                        block px-16 py-2 mt-6 mb-10
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50 bg-slate-200
                    "
                          type={item.type}
                          required={item.required}
                          name={item.name}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </>
                    );
                  case "select":
                    return (
                      <>
                        <label
                          htmlFor={item.name}
                          className="after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                          {item.label}
                        </label>
                        <select
                          required={item.required}
                          name={item.name}
                          className="   w-full
                        block px-14 py-2 mt-6 mb-10
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                    "
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        >
                          {(item.options ?? []).map((option) => (
                            <option value={option.value}>
                              {option.label}{" "}
                            </option>
                          ))}
                        </select>
                      </>
                    );
                  case "checkbox":
                    return (
                      <>
                        <label
                          htmlFor={item.name}
                          className="after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                          {item.label}
                        </label>
                        <input
                          className=" w-full
                        block px-16 py-2 mt-6
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-indigo-200
                        focus:ring-opacity-50 bg-slate-200
                    "
                          type={item.type}
                          required={item.required}
                          name={item.name}
                          onChange={handleTerms}
                        />
                      </>
                    );

                  case "submit":
                    return (
                      <>
                        <button
                          className="mt-6 rounded-lg bg-red-200 py-4 w-full text-md font-bold"
                          onClick={handleSubmit}
                        >
                          Enviar
                        </button>
                      </>
                    );
                  default:
                    break;
                }
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
