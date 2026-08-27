export default function Services({ cuPer, setCuPer, children }) {
  return (
    <div>
      <h3>
        {children}
        <select value={cuPer} onChange={(e) => setCuPer(e.target.value)}>
          <option value={0}>Dissaticfied (0%)</option>
          <option value={5}>It was ok (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </h3>
    </div>
  );
}
