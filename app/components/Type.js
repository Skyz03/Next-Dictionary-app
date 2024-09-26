export default function Type({ type }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="font-bold lowercase">{type}</p>
      <hr className="w-[85%]" />
    </div>
  );
}
