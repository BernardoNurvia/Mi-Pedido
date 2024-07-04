/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const FuncionesContext = createContext();

const FuncionProvider = ({ children }) => {
  const arrayProduc = [
    {
      id: 1,
      img: "./img/public4Perf.jpeg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      description: "Un pack de coca cola de 1 Litro",
      stock: 100,
      precio: 600,
      cantidad: 0,
    },
    {
      id: 2,
      img: "./img/i1.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      description: "Un pack de coca cola de 1 Litro",
      stock: 100,
      precio: 1600,
      cantidad: 0,
    },
    {
      id: 3,
      img: "./img/i2.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      description: "Un pack de coca cola de 1 Litro",
      stock: 100,
      precio: 80,
      cantidad: 0,
    },
    {
      id: 4,
      img: "./img/i3.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      description: "Un pack de coca cola de 1 Litro",
      stock: 100,
      precio: 350,
      cantidad: 0,
    },
    {
      id: 5,
      img: "./img/public4Perf.jpeg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      stock: 100,
      precio: 556,
    },
    {
      id: 6,
      img: "./img/i1.jpg",
      alt: "img del producto",
      nameProduc: "Nombre del producto",
      description: "Un pack de coca cola de 1 Litro",
      stock: 100,
      precio: 330,
      cantidad: 0,
    },
  ];

  //funcion para abrir el filtrar producto
  const [abrirFiltrar, SetAbrirFiltrar] = useState();
  function handleFiltrar() {
    SetAbrirFiltrar(!abrirFiltrar);
  }

  // funcion para sumar y restar los productos
  const [cantidad, setCantidad] = useState(0);
  const [precioCalculado, setPrecioCalculado] = useState(cantidad);
  const [claseProductos, setClaseProductos] = useState("");

  const handleClickSumar = (id) => {
    // Actualizar la cantidad seleccionada
    setCantidad((prevCantidad) => {
      const newCantidad = {
        ...prevCantidad,
        [id]: (prevCantidad[id] || 0) + 1,
      };

      if (newCantidad[id] < 0) {
        setClaseProductos("conProduc");
      }

      return newCantidad;
    });

    // Encontrar el producto correspondiente al id
    const product = arrayProduc.find((prod) => prod.id === id);

    // Actualizar el precio calculado utilizando el callback de setState
    setPrecioCalculado((prevPrecios) => ({
      ...prevPrecios,
      [id]: (prevPrecios[id] || 0) + product.precio,
    }));
  };

  useEffect(() => {
    let productoSeleccionado =
      JSON.parse(localStorage.getItem("productoSeleccionado")) || [];

    Object.keys(cantidad).forEach((id) => {
      const existingProductIndex = productoSeleccionado.findIndex(
        (prod) => prod.id === parseInt(id)
      );
      const product = arrayProduc.find((prod) => prod.id === parseInt(id));

      if (cantidad[id] === 0) {
        // Eliminar producto si la cantidad es 0
        if (existingProductIndex >= 0) {
          productoSeleccionado.splice(existingProductIndex, 1);
        }
      } else if (existingProductIndex >= 0) {
        productoSeleccionado[existingProductIndex].cantidad = cantidad[id];
        productoSeleccionado[existingProductIndex].precio = precioCalculado[id];
      } else {
        productoSeleccionado.push({
          ...product,
          cantidad: cantidad[id] || 1,
        });
      }
    });

    localStorage.setItem(
      "productoSeleccionado",
      JSON.stringify(productoSeleccionado)
    );
  }, [cantidad, precioCalculado]);

  const handleClickRestar = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: (prevCantidad[id] || 0) > 0 ? prevCantidad[id] - 1 : 0,
    }));

    // Encontrar el producto correspondiente al id
    const product = arrayProduc.find((prod) => prod.id === id);

    // Actualizar el precio calculado utilizando el callback de setState
    setPrecioCalculado((prevPrecios) => ({
      ...prevPrecios,
      [id]:
        (prevPrecios[id] || 0) > product.precio
          ? prevPrecios[id] - product.precio
          : 0,
    }));
  };

  // funcion para remarcar con la linea blanca en que navegacion estamos (el nav)
  const [claseNav, setClaseNav] = useState(
    localStorage.getItem("claseNav") || "inicio"
  );

  const handleClickNav = (tipo) => {
    setClaseNav(tipo);
    localStorage.setItem("claseNav", tipo);
  };

  // funcion para el toggle de "PERFIL"

  const [active, setActive] = useState(() => {
    const estadoGuardado = localStorage.getItem("toggleState");
    return estadoGuardado ? JSON.parse(estadoGuardado) : false;
  });

  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(active));
  }, [active]);

  const toggleClass = () => {
    setActive((estadoPrevio) => !estadoPrevio);
  };

  return (
    <FuncionesContext.Provider
      value={{
        arrayProduc,
        handleFiltrar,
        abrirFiltrar,
        handleClickSumar,
        handleClickRestar,
        cantidad,
        precioCalculado,
        claseNav,
        handleClickNav,
        toggleClass,
        active,
      }}
    >
      {children}
    </FuncionesContext.Provider>
  );
};

export { FuncionesContext, FuncionProvider };
