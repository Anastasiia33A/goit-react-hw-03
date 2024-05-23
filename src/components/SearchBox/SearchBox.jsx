import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
    const searchNameId = useId();
    return (
        <div>
            <label htmlFor={searchNameId}>Find contacts by name</label>
            <input type="text" name="searchName" id={searchNameId} value={value} onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}