import { useState } from "react";
import Input from "./Components/Input";

function App() {
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);

    function handleYears(e) {
        setYears(e.target.value);
    }

    function handleMonths(e) {
        setMonths(e.target.value);
    }

    function handleDays(e) {
        setDays(e.target.value);
    }

    function handleSubmit(e) {
        // e.preventDefault()

        alert("Fomr is submitted")
    }

    const timeDifference =
        Date.now() -
        Date.parse(new Date(`${years}, ${months}, ${days}`)).toString();
    const yr = Math.round(timeDifference / 3.154e10);
    const mnth = Math.round((timeDifference % 3.154e10) / 2.628e9);
    const dy = Math.round(((timeDifference % 3.154e10) % 2.628e9) / 8.64e7);

    return (
        <main className="h-screen p-3 bg-off-white">
            <div className="font-Poppins max-w-[375px] mx-auto bg-white rounded-2xl rounded-br-[100px] p-6 pt-11 mt-20 shadow-xl shadow-purple/10 md:max-w-[650px] md:p-10">
                <form action="">
                    <div className="flex flex-row max-w-[300px] gap-3 mx-auto md:mx-0 md:max-w-[390px]">
                        <Input
                            value={"Day"}
                            onChange={handleDays}
                            placeholder={"DD"}
                            error1={days == ""}
                            error2={days > 31 ? true : false}
                            errorMsg={"Must be a valid day"}
                        />
                        <Input
                            value={"Month"}
                            onChange={handleMonths}
                            placeholder={"MM"}
                            error1={months == ""}
                            error2={months > 11 ? true : false}
                            errorMsg={"Must be a valid month"}
                        />
                        <Input
                            value={"Year"}
                            onChange={handleYears}
                            placeholder={"YYYY"}
                            error1={years == ""}
                            error2={
                                years > new Date().getFullYear() ? true : false
                            }
                            errorMsg={"Must be in the past!"}
                        />
                    </div>

                    <div className="relative my-10 md:mt-0">
                        <div className="pt-8">
                            <hr />
                        </div>
                        <div className="absolute top-0 left-0 right-0 text-center md:left-auto md:text-left">
                            <button
                                type="submit"
                                onSubmit={alert("hi")}
                                className="w-12 h-12 p-8 mx-auto bg-center bg-no-repeat rounded-full md:h-16 md:w-16 bg-purple bg-arrow-icon hover:bg-off-black"
                            ></button>
                        </div>
                    </div>
                </form>

                <h1 className="text-5xl italic font-bold leading-tight md:text-6xl">
                    <span className="text-purple">{yr}</span> years
                </h1>
                <h1 className="text-5xl italic font-bold leading-tight md:text-6xl">
                    <span className="text-purple">{mnth}</span> months
                </h1>
                <h1 className="text-5xl italic font-bold leading-tight md:text-6xl">
                    <span className="text-purple">{dy}</span> days
                </h1>
            </div>
        </main>
    );
}

export default App;
