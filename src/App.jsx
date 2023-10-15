import { useState } from "react";
import Input from "./Components/Input";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

function App() {
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);

    const [yr, setYr] = useState("--");
    const [mnth, setMnth] = useState("--");
    const [dy, setDy] = useState("--");

    const [formSubmitted, setFormSubmitted] = useState(false);

    dayjs.extend(customParseFormat);
    const isDateValid = dayjs(
        `${years}-${months}-${days}`,
        "YYYY-M-DD",
        true
    ).isValid();

    function handleSubmit(e) {
        e.preventDefault();

        // Get the current date
        const currentDate = dayjs();

        // Get the target date
        const targetDate = dayjs(`${years}-${months}-${days}`, "YYYY-M-DD");

        // The time difference in milliseconds
        const timeDifference = currentDate - targetDate;

        const yrValue = Math.round(timeDifference / 3.154e10);
        const mnthValue = Math.round((timeDifference % 3.154e10) / 2.628e9);
        const dyValue = Math.round(
            ((timeDifference % 3.154e10) % 2.628e9) / 8.64e7
        );

        setFormSubmitted(true);
        if (isDateValid) {
            // Lift the values up, so that we can share it with the h1 element that needs it.
            setYr(yrValue);
            setMnth(mnthValue);
            setDy(dyValue);
        } else {
            return false;
        }
    }

    return (
        <main className="h-screen p-3 bg-off-white md:flex md:items-center md:justify-center">
            <div className="font-Poppins max-w-[375px] mx-auto bg-white rounded-2xl rounded-br-[100px] p-6 pt-11 mt-20 md:mt-0 shadow-xl shadow-purple/10 md:min-w-[650px] md:p-10">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="flex flex-row max-w-[300px] gap-3 mx-auto md:mx-0 md:max-w-[390px]">
                        <Input
                            value={"Day"}
                            onChange={(e) => setDays(e.target.value)}
                            placeholder={"DD"}
                            error1={days == ""}
                            error2={days < 1 || days > 31 ? true : false}
                            errorMsg={"Must be a valid day"}
                            formSubmitted={formSubmitted}
                        />
                        <Input
                            value={"Month"}
                            onChange={(e) => setMonths(e.target.value)}
                            placeholder={"MM"}
                            error1={months == ""}
                            error2={months > 12 || months < 1 ? true : false}
                            errorMsg={"Must be a valid month"}
                            formSubmitted={formSubmitted}
                        />
                        <Input
                            value={"Year"}
                            onChange={(e) => setYears(e.target.value)}
                            placeholder={"YYYY"}
                            error1={years == ""}
                            error2={
                                years > new Date().getFullYear() ? true : false
                            }
                            errorMsg={"Must be in the past!"}
                            formSubmitted={formSubmitted}
                        />
                    </div>

                    <div className="relative my-10 md:mt-0">
                        <div className="pt-8">
                            <hr />
                        </div>
                        <div className="absolute top-0 left-0 right-0 text-center md:left-auto md:text-left">
                            <button
                                type="submit"
                                className="w-12 h-12 p-8 mx-auto bg-center bg-no-repeat rounded-full md:h-16 md:w-16 bg-purple bg-arrow-icon hover:bg-off-black"
                            />
                        </div>
                    </div>
                </form>

                <div className="text-5xl italic font-bold leading-tight md:text-6xl">
                    <h1 className="">
                        <span className="text-purple">{yr}</span> years
                    </h1>
                    <h1>
                        <span className="text-purple">{mnth}</span> months
                    </h1>
                    <h1>
                        <span className="text-purple">{dy}</span> days
                    </h1>
                </div>
            </div>
        </main>
    );
}

export default App;
