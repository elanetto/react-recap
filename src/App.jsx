import { useNotes } from './stores/store';

function App() {
  const {notes, addNote, removeNote, removeAll } = useNotes();

  return (
    <>
      <h1 className="text-red-400 font-bold text-5xl">Hello!</h1>
      <form 
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addNote(e.target.note.value);
        }}
      >
        <input type="text" placeholder="Enter your note" id="note" aria-label="write a note here"
        className="border p-1 rounded" />
        <button className="bg-red-400 text-red-950 rounded p-2 hover:bg-red-900 hover:text-white" type="submit">Add notes</button>


      </form>
      {notes.map((note, i) => (
        <div key={note} className='flex gap-2 p-2 items-center'>
          <p>{note}</p>
          <button 
            className='rounded bg-red-400 text-red-950 p-2 hover:bg-red-950 hover:text-white'
            onClick={()=> {
              removeNote(note);
            }}
          >Delete</button>
        </div>
      ))}
      <button
      className='rounded bg-red-400 text-red-950 p-2 hover:bg-red-950 hover:text-white'
      onClick={()=> {
        removeAll(note);
      }}
      >Delete all</button>
    </>
  )
}

export default App
