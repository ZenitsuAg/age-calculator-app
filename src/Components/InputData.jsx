import { useContext } from "react"
import { AppContext } from "./AppContext"

export default function InputData() {
    const { value } = useContext(AppContext);

    return (
        <div>
            <p>{value} years</p>
        </div>
    )
}