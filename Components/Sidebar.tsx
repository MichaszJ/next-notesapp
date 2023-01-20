import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-48 h-screen bg-slate-200 shrink-0">
      <h1 className="text-center pt-2">Notetaking App</h1>

      <hr className="h-px my-2 border-0 bg-slate-400" />

      <div className="flex flex-col pl-2">
        <Link href="/" className="text-blue-600 underline">
          Home
        </Link>
        <Link href="/library" className="text-blue-600 underline">
          Library
        </Link>
      </div>
    </div>
  );
}

{
  /* <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-400">Content</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div> */
}
