import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function NotePage({
  params,
}: {
  params: { noteId: string };
}) {
  const note: Note = await pb.collection("notes").getOne(params.noteId);

  const tags = note.tags.split(",");

  return (
    <div className="flex-grow p-4">
      <h1 className="text-2xl text-center pt-2">{note.title}</h1>
      <p className="pt-8">{note.body}</p>

      {note.tags && (
        <div className="pt-16">
          <span>Tags: </span>
          <div className="inline-flex flex-wrap gap-1">
            {note.tags &&
              tags.map((tag) => {
                return (
                  <span
                    className="bg-emerald-500 rounded-lg p-1 text-sm text-white"
                    key={tag}
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
  // return <p>{params.noteId}</p>;
}
