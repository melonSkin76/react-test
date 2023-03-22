import { useState } from "react"

export default function Name( { name } ){
    const [visible, setVisible] = useState(false);


    function toggleVisible() {
        setVisible(!visible);
    }

    if (visible) {
        return <span onClick={toggleVisible}> {name} </span>
    } else {
        return <span onClick={toggleVisible}> Click to Show! </span>
    }
}