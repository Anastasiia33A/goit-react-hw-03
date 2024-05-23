export default function Contact({  name, number, id, onDelete }) {
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </>
    );
}