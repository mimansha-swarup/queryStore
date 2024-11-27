"use client";
import React, { useState } from "react";

const MAX_SHEETS = 4;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const UserSheets = () => {
  const [navigation, setNavigation] = useState({
    start: 0,
    end: MAX_SHEETS,
  });
  const handleNextNavigation = () => {
    if (navigation.end < arr.length) {
      console.log("hitting");
      setNavigation((prev) => ({
        ...prev,
        end: prev.end + 1,
        start: prev.start + 1,
      }));
    }
  };
  const handlePrevNavigation = () => {
    if (navigation.start > 0) {
      setNavigation((prev) => ({
        ...prev,
        start: prev.start - 1,
        end: prev.end - 1,
      }));
    }
  };
  return (
    <section className="p-6 bg-sidebarBackground  rounded-3xl shadow-lg  ">
      <h2 className=" text-3xl">My Sheets</h2>
      <div className="mt-6 w-full">
        {false ? (
          <div className="w-full border-dashed border-2 rounded-xl border-divider flex justify-center p-12">
            No sheets have been created
          </div>
        ) : (
          <div className="flex gap-4 min-h-[120px]">
            {arr?.slice(navigation.start, navigation.end)?.map((index) => {
              console.log(navigation.start, navigation.end);
              return (
                <div
                  key={index}
                  className="border border-divider p-4 rounded-xl"
                >
                  <p className="text-md">Sheet {index + 1}</p>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <button
          onClick={handlePrevNavigation}
          className="bg-black rounded-full p-2"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextNavigation}
          className="bg-black rounded-full p-2"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default UserSheets;
