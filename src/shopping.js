export default function Shopping(props) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={props.data.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.data.product_name}</h5>
            <h4 className="card-title">
              {props.data.currency}
              {props.data.product_price}
            </h4>
            <p className="card-text">{props.data.product_description}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success"
              onClick={() => props.addItem(props.data)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
