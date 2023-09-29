export default function Input({ value, onChange, placeholder, error = false }) {
    return (
        <div>
            <div className="tracking-widest uppercase">
                <label
                    htmlFor={value.toLowerCase()}
                    className="text-smokey-grey text-sm"
                >
                    {value}
                </label>
                <input
                    type="number"
                    name={value}
                    id={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="p-2 mt-2 border rounded-lg border-off-white w-full"
                />
            </div>
            {error && (
                <p className="text-light-red text-[0.5rem] italic transform-none">
                    This field is required
                </p>
            )}
        </div>
    );
}
