export default function Pay({ newValue, tip }) {
  return (
    <div>
      <p>
        Your pay is ${newValue + tip} (${newValue} + ${tip} tip)
      </p>
    </div>
  );
}
