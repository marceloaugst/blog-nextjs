export default function FileInputField({ id, label, onChange }) {
    return (
      <div>
        <label htmlFor={id} className="block text-lg font-semibold">{label}</label>
        <input
          type="file"
          id={id}
          className="mt-2 w-full"
          onChange={(e) => onChange(e.target.files[0])}
        />
      </div>
    );
  }
  