import NoteCard from "@/Components/NoteCard";
import CardLibrary from "@/Components/CardLibrary";

export default function Library() {
  // @ts-expect-error Server Component
  return <CardLibrary />;
}
