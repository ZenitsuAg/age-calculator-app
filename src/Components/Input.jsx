export default function Input({
    value,
    onChange,
    placeholder,
    error1 = false,
    error2 = false,
    errorMsg,
    formSubmitted = false,
}) {
    return (
        <div>
            <div className="tracking-widest uppercase">
                <label
                    htmlFor={value.toLowerCase()}
                    className={`text-[0.7rem] font-bold text-smokey-grey ${
                        formSubmitted && (error1 || error2) && "text-red-600"
                    }`}
                >
                    {value}
                </label>
                <input
                    type="number"
                    name={value}
                    id={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full p-2 mt-2 text-2xl border rounded-lg outline-none border-off-white focus:border-off-black focus:border-1 ${
                        formSubmitted &&
                        (error1 || error2) &&
                        "border-light-red"
                    }`}
                />
            </div>
            {formSubmitted && error1 && (
                <p className="text-[0.65rem] italic text-light-red transform-none">
                    This field is required
                </p>
            )}
            {formSubmitted && error2 && (
                <p className="text-[0.65rem] italic text-light-red transform-none">
                    {errorMsg}
                </p>
            )}
        </div>
    );
}
