import Card from "@/components/questionTracker/Card";
import CollectionHeader from "@/components/questionTracker/CollectionHeader";
import React from "react";

const QuestionTracker = () => {
  return (
    <div>
      <CollectionHeader>My Workspace</CollectionHeader>

      <div className="w-full overflow-auto h-[calc(100vh-98px)]">
        {[...Array(10)].map(() => (
          <Card />
        ))}
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="p-4 text-center bg-bac">7 bookmarks</div>
      </div>
    </div>
  );
};

export default QuestionTracker;
