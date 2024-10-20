import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center px-4">
      <Input
        placeholder="Search"
        className="h-8 max-w-72 rounded bg-alternativeBackground text-white border-none focus-visible:bg-background"
      />
      <Button
        variant="default"
        className="bg-accent h-8 font-bold text-background"
      >
        <PlusIcon /> Add
      </Button>
    </div>
  );
};

export default Navbar;
