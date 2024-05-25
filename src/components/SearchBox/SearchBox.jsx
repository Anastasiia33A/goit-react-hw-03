import { useId } from "react";
import css from "../SearchBox/SearchBox.module.css"

export default function SearchBox({ value, onSearch }) {
    const searchNameId = useId();
    return (
        <div>
            <label className={css.label} htmlFor={searchNameId}>Find contacts by name</label>
            <input  type="text" name="searchName" id={searchNameId} value={value} onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}