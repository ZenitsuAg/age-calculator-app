export default function Input({ value, onChange, placeholder, error = false }) {
    return (
        <div>
            <div className="tracking-widest uppercase">
                <label
                    htmlFor={value.toLowerCase()}
                    className="text-[0.7rem] font-bold text-smokey-grey"
                >
                    {value}
                </label>
                <input
                    type="number"
                    name={value}
                    id={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full p-2 mt-2 text-2xl border rounded-lg outline-none border-off-white focus:border-off-black focus:border-1"
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
