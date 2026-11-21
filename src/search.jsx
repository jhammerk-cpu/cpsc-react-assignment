import './style.css';


export default function SearchBox({ value, onChange }) {
  return (
    <div className="search-box-container">
      <input
        type="text"
        aria-label="Search users by name"
        placeholder="Search users..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="search-box"
      />
    </div>
  );
}