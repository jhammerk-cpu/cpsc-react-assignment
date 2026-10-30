export default function SearchBox({ value, onChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        aria-label="Search users by name"
        placeholder="Search users..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}