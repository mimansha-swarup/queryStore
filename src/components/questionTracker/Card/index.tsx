import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Trash, View } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="px-4  cursor-pointer hover:bg-disableBackground">
      <div className="flex gap-8 group items-center py-2 border-y border-shadow p-2 ">
        <Image
          alt="gfg"
          src="https://codolio.com/icons/gfg.png"
          width={24}
          height={15}
        />
        <div>
          <p className="text-md text-white">Indexes of Subarray Sum</p>
          <div className="flex mt-2 gap-2">
            <Badge variant="secondary" className="font-normal text-xs">
              Secondary
            </Badge>
            <Badge variant="secondary" className="font-normal text-xs">
              Html
            </Badge>
            <Badge variant="secondary" className="font-normal text-xs">
              Css
            </Badge>
            <Badge variant="secondary" className="font-normal text-xs">
              Dynamic Greedy
            </Badge>
          </div>
          <div className="text-xs mt-2 text-secondaryText font-light">
            <span className="text-accent capitalize">medium</span>
            <span> · 15th oct 2024</span>
          </div>
        </div>
        <div className="hidden gap-2 ml-auto group-hover:flex ">
          <Button
            size="icon"
            className="bg-transparent hover:bg-activeBackground text-danger"
          >
            <Trash />
          </Button>
          <Button
            size="icon"
            className="bg-transparent hover:bg-activeBackground text-white"
          >
            <View />
          </Button>
          <Button
            size="icon"
            className="bg-transparent hover:bg-activeBackground text-yellow"
          >
            <Star />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
