export default function Contact({ id, name, number, onDelete }) {
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button type="button" onClick={() => onDelete(id)} >Delete</button>
        </>
    );
}