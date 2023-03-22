import { useState } from "react"

export default function GuestList(){
    const [guestList, setGuestList] = useState(["A", "B", "C"]);
    const [newName, setNewName] = useState("")

    const ListItems = guestList.map((name) => <li>{name}</li>)

    function addName() {
        setGuestList(guestList.concat(newName))
    }

    return <>
        <ul>{ListItems}</ul>
        <div class = "controls">
            <input value={newName} onChange={(e) => setNewName(e.target.value)}></input>
            <button onClick={addName}>Add my name</button>
        </div>
    </>
}