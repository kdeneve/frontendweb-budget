export default function Transaction(props) {
  const { user, amount, place } = props;
  return (
    <div className="text-bg-dark" style={{ textAlign: "center" }}>
      {user} gaf €{amount} uit bij {place}
    </div>
  );
}
