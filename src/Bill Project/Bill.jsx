export default function Bill({ cuValue, setCuValue }) {
  return (
    <div>
      <h3>
        How much was the bill?{" "}
        <input
          type="text"
          placeholder="Bill value"
          value={cuValue}
          onChange={(e) => setCuValue(Number(e.target.value))}
        />
      </h3>
    </div>
  );
}
