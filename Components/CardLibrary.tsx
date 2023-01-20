import NoteCard from "./NoteCard";

import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function CardLibrary() {
  const records = (await pb
    .collection("notes")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    })) as Note[];

  return (
    <div className="flex-grow p-4">
      <h1 className="text-2xl text-center pt-2">Notes Library</h1>

      <div className="grid grid-cols-4 gap-4 grid-flow-row pt-8 ">
        {records.map((record) => {
          return <NoteCard key={record.id} note={record} />;
        })}
      </div>
    </div>
  );
}
