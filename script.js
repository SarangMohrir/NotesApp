document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("note-input");
    const addNoteButton = document.getElementById("add-note-btn");
    const noteList = document.getElementById("notes-list")
    
    let notes = []
    addNoteButton.addEventListener("click", () => {
        const noteText = noteInput.value.trim();

        if (noteText === "") {return}

        const newNote ={
            id: Date.now(),
            text: noteText,
            completed: false,
        };

        notes.push(newNote)
        noteInput.value = "";
        renderNotes();
    });

    function renderNotes() {
        noteList.innerHTML = "";
        notes.forEach((note, index) => {
            const li = document.createElement("li")
            li.className = "flex justify-between items-center bg-red-200 px-3 py-2 rounded mb-2"
            li.innerHTML = `<span> ${index + 1}.${note.text}</span>
            <button onclick="deleteTask(${note.id})" class="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600">Delete</button>`;
            noteList.appendChild(li)
        });

        window.deleteTask = (noteId) => {
            notes = notes.filter(note => noteId !== note.id)
            renderNotes();
        }
    }
})