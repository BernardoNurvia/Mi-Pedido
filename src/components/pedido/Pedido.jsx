import "./pedido.scss";

export const Pedido = () => {
  return (
    <section className="listadoPedido">
      <h3 className="titlePedido">Resumen de pedido</h3>
      <p className="editar">
        Editar Pedido{" "}
        <strong className="svgEdit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="lapizSvg"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
          </svg>
        </strong>
      </p>
      <section className="contenedorProductos">
        <div className="containerProduc">
          <div className="containerImg">
            <img src="./img/public4Perf.jpeg" alt="img del producto" />
            <div className="infoProdc">
              <p className="nameProd">Nombre del producto</p>
              <p className="description">Un pack de coca cola de 1 Litro</p>
              <p className="cantidadItem">
                Cantidad: <strong className="numero">5</strong>
              </p>
            </div>
          </div>
          <p className="precio">$600</p>
        </div>
      </section>
      <div className="detalleCompra">
        <h4 className="detalleProd">Detalle de la compra</h4>
        <p className="cantidadTotal">
          Cantidad de productos totales{" "}
          <strong className="numeroTotal">5</strong>
        </p>
        <p className="priceTotal">
          Precio Total <strong className="precioNumber">$600</strong>
        </p>
        <button className="btnFinalizarCompra">Finalizar pedido</button>
      </div>
    </section>
  );
};
