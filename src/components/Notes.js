import React from 'react'

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li
                    className="list-group-item note"
                    key={note.id}
                    >

                    <div>
                        <strong>{note.title}</strong>

                        <span className="badge badge-light">{new Date().toLocaleDateString()}</span>
                    </div>

                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                    >
                        delete
                    </button>
                </li>
            ))}
        </ul>
    )
}