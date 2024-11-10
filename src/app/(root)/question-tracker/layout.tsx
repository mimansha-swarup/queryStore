"use client";
import Card from "@/components/questionTracker/Card";
import CollectionHeader from "@/components/questionTracker/CollectionHeader";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "@/components/shared/AppSidebar";

const questionTrackerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full bg-background text-primaryText  overflow-hidden">
        <div className="overflow-auto w-full pt-2 border-l border-l-shadow">
          <Navbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default questionTrackerLayout;
