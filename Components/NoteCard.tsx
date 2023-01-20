import Link from "next/link";

export default function NoteCard({ note }: { note: Note }) {
  const tags = note.tags.split(",");

  return (
    <Link
      href={`/notes/${note.id}`}
      className="border rounded-md p-2 shadow-md flex flex-col justify-between"
    >
      <div className="h-24">
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="line-clamp-3 text-sm">{note.body}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {note.tags &&
          tags.map((tag) => {
            return (
              <span
                className="bg-emerald-500 rounded-lg p-1 text-xs text-white"
                key={tag}
              >
                {tag}
              </span>
            );
          })}
      </div>
    </Link>
  );
}
