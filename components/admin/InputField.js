export default function InputField({ id, label, value, onChange, placeholder, required = false }) {
    return (
      <div>
        <label htmlFor={id} className="block text-lg font-semibold">{label}</label>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      </div>
    );
  }
  