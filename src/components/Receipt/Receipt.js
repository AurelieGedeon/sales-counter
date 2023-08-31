import "./Receipt.css";

export default function Receipt({product}) {
  return (
    <>
      <div className="receipt">
        <h2 className="logo">Sales Counter</h2>
        <div className="transaction-details">Helped by: Aurelie</div>
        <br /><br />
        <div class="transaction-details">
			<div class="detail">1</div>
			<div class="detail">{product}</div>
			<div class="detail">{product}</div>
		</div>
      </div>
    </>
  );
}
