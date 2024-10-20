import Card from "@/components/questionTracker/Card";
import CollectionHeader from "@/components/questionTracker/CollectionHeader";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-background text-primaryText  overflow-hidden">
      <Sidebar />
      <div className="overflow-auto w-full py-4 border-l border-l-shadow">
        <Navbar />
        <CollectionHeader>My Workspace</CollectionHeader>

        <div className="w-full overflow-auto h-[calc(100vh-110px)]">
          {[...Array(10)].map(() => (
            <Card />
          ))}
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="p-4 text-center">7 bookmarks</div>
        </div>
      </div>
    </main>
  );
}
