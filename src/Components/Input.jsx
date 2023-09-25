export default function Input({ value, onChange }) {
    return (
        <div className="mb-4 tracking-widest uppercase">
            <label htmlFor={value}>{value}</label> {/* Check how to convert the first letter of a string to uppercase */}
            <input type="number" name={value} id={value} onChange={onChange} className="shadow-inner"/>
        </div>
    )
}