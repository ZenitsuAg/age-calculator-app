export default function Input({ value, onChange }) {
    return (
        <div className="mb-4 tracking-widest uppercase">
            <label htmlFor={value.toLowerCase()}>{value}</label>
            <input type="number" name={value} id={value} onChange={onChange} className="p-2 mt-2 bg-gray-100 appearance-none"/>
        </div>
    )
}