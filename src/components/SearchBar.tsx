type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Rechercher un film"
      className="border p-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid="search-input"
    />
  );
}
