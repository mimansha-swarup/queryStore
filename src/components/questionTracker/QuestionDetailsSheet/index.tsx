import { Button } from "@/components/ui/button";
import { Label, labelVariants } from "@/components/ui/label";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import { Database, Eye, List, TableProperties } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import LabelValue from "@/components/shared/LabelValue";
import { Badge } from "@/components/ui/badge";

const QuestionViewSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="bg-sidebarBackground hover:bg-activeBackground"
        >
          <Eye />
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[600px]">
        <SheetHeader>
          <SheetTitle className="text-xl">Problem Title?</SheetTitle>
          <div className=" border-b-2 border-b-shadow mb-4" />

          <h2 className="text-lg pt-6 pb-5">Question Details</h2>
          <SheetDescription>
            <LabelValue label="Difficulty" icon={<Database size={14} />}>
              <p className="text-sm text-green-500">Easy</p>
            </LabelValue>
            <LabelValue
              icon={<List className="min-w-[14px]" size={16} />}
              label="Topics"
            >
              <div className="flex items-center gap-2 overflow-auto py-1">
                {[...Array(10)].map((e) => (
                  <Badge variant="secondary">Dyanmic</Badge>
                ))}
              </div>
            </LabelValue>
            <LabelValue
              label="Popular sheets"
              icon={<TableProperties className="min-w-[14px]" size={14} />}
            >
              <div className="flex items-center gap-2 overflow-auto py-1">
                {[...Array(10)].map((e) => (
                  <Badge variant="secondary">Dyanmic</Badge>
                ))}
              </div>
            </LabelValue>

            <div className=" border-b-2 border-b-shadow my-6" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default QuestionViewSheet;
