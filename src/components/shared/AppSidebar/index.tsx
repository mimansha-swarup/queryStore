"use client";
import React from "react";

// const AppSidebar = () => {
//   return <div className=" bg-sidebarBackground h-screen w-[340px]"></div>;
// };

import {
  Calendar,
  Folder,
  Hash,
  Home,
  Inbox,
  Search,
  Settings,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
  },
];

const data = {
  navMain: [
    {
      title: "Collection",
      items: [
        {
          title: "Workspace",
          url: "#workspace",
          icon: Folder,
        },
        {
          title: "Workspace2",
          url: "#workspace",
          icon: Folder,
        },
        {
          title: "Workspace3",
          url: "#workspace",
          icon: Folder,
        },
      ],
    },
    {
      title: "Tags",

      items: [
        {
          title: "Array",
          url: "#array",
          icon: Hash,
        },
        {
          title: "mnc",
          url: "#array",
          icon: Hash,
        },
        {
          title: "faang",
          url: "#array",
          icon: Hash,
        },
      ],
    },
  ],
};

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="!bg-sidebarBackground h-screen">
        <SidebarGroup>
          <SidebarMenuItem className="flex gap-2" key={"user"}>
            <User size={16} />
            Mimansha swarup
          </SidebarMenuItem>
        </SidebarGroup>
        {data.navMain?.map((navItem) => (
          <SidebarGroup>
            <SidebarGroupLabel className="text-md text-secondaryText">
              {navItem.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItem.items?.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon size={24} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        {/* <SidebarGroup>
          <SidebarGroupLabel className="text-md text-secondaryText">
            Collection
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon size={24} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md text-secondaryText">
            Tags(2)
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
export default AppSidebar;
