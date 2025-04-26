"use client"

import * as React from "react"
import { Trash2 } from "lucide-react"
import { GiNightSleep } from "react-icons/gi"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { RiEmotionLaughLine, RiZzzFill } from "react-icons/ri"
import { MdHistory } from "react-icons/md"
import { FaBedPulse } from "react-icons/fa6"
import { MdOutlineFiberNew } from "react-icons/md"

// Sample data for dreams
export const dreamData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "New Dream",
      url: "#",
      icon: MdOutlineFiberNew,
      isActive: true,
    },
    {
      title: "Past Dreams",
      url: "#",
      icon: GiNightSleep,
      isActive: false,
    },
    {
      title: "Emotions",
      url: "#",
      icon: RiEmotionLaughLine,
      isActive: false,
    },
    {
      title: "Context",
      url: "#",
      icon: MdHistory,
      isActive: false,
    },
    {
      title: "Dream Quality",
      url: "#",
      icon: FaBedPulse,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  dreams: [
    {
      id: 1,
      title: "Flying Over Mountains",
      date: "Yesterday",
      emotion: "Exhilarating",
      description: "I was soaring over snow-capped peaks, feeling completely free. The air was crisp and I could control my direction with just my thoughts. Everything below looked miniature and perfect.",
      color: "bg-blue-100 dark:bg-blue-900",
      symbols: ["Flying", "Mountains", "Freedom"],
      interpretation: "This dream suggests you're feeling a sense of freedom and liberation in your waking life. The ability to soar above obstacles might represent overcoming recent challenges.",
      quality: 9.2,
      duration: "8.5 hours",
      recurring: true
    },
    {
      id: 2,
      title: "Lost in a Maze",
      date: "3 days ago",
      emotion: "Anxious",
      description: "Wandering through an endless hedge maze that kept changing. Every time I thought I found the exit, the path would shift. Started panicking until I realized I could float above it all.",
      color: "bg-red-100 dark:bg-red-900",
      symbols: ["Maze", "Lost", "Panic", "Escape"],
      interpretation: "Being lost in a maze often represents feeling confused or trapped in a complicated situation. Finding an unconventional solution (floating) suggests your subconscious knows there's a way out.",
      quality: 6.5,
      duration: "7 hours",
      recurring: false
    },
    {
      id: 3,
      title: "Underwater City",
      date: "Last week",
      emotion: "Curious",
      description: "Discovered a complete civilization under the ocean. The buildings were made of coral and glowing crystals. I could breathe underwater and communicate with the residents through thoughts.",
      color: "bg-green-100 dark:bg-green-900",
      symbols: ["Water", "Hidden World", "Telepathy"],
      interpretation: "The underwater city represents exploring hidden emotions or subconscious thoughts. Being able to breathe underwater suggests comfort with emotional depths.",
      quality: 8.7,
      duration: "9 hours",
      recurring: false
    },
    {
      id: 4,
      title: "Childhood Home",
      date: "2 weeks ago",
      emotion: "Nostalgic",
      description: "Back in my childhood home, but everything was slightly bigger. Found rooms I never knew existed filled with forgotten toys. My old dog was there waiting for me, looking young again.",
      color: "bg-yellow-100 dark:bg-yellow-900",
      symbols: ["Childhood", "Home", "Lost Rooms", "Pet"],
      interpretation: "This dream reflects nostalgia and reconnection with your past self. The unknown rooms suggest rediscovering forgotten aspects of yourself or memories.",
      quality: 7.8,
      duration: "6.5 hours",
      recurring: true
    },
    {
      id: 5,
      title: "Time Freeze",
      date: "3 weeks ago",
      emotion: "Surreal",
      description: "Everyone around me was frozen in time. I walked through a city where nothing moved - birds suspended in flight, water droplets hanging in mid-air. I could unfreeze people by touching them.",
      color: "bg-purple-100 dark:bg-purple-900",
      symbols: ["Time", "Control", "Power"],
      interpretation: "This dream may represent a desire for control in your life or feeling that you're the only one moving forward while others are static.",
      quality: 8.9,
      duration: "7.5 hours",
      recurring: false
    },
    {
      id: 6,
      title: "Ancient Library",
      date: "Last month",
      emotion: "Fascinated",
      description: "Found myself in a vast library that contained every book ever written and some that haven't been written yet. The librarian knew my name and showed me a book about my own life.",
      color: "bg-indigo-100 dark:bg-indigo-900",
      symbols: ["Books", "Knowledge", "Life Story"],
      interpretation: "The library represents access to universal knowledge and wisdom. Being shown your own life story suggests reflection on your past and curiosity about your future.",
      quality: 9.5,
      duration: "8 hours",
      recurring: false
    },
  ],
  recurring: {
    "Flying": 5,
    "Water": 3,
    "Childhood": 2,
    "Lost": 4,
    "Animals": 2
  }
}

export function AppSidebar() {
  const [activeItem, setActiveItem] = React.useState(dreamData.navMain[0])
  const [dreams, setDreams] = React.useState(dreamData.dreams)
  const { setOpen } = useSidebar()

  return (
      <Sidebar
          collapsible="icon"
          className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      >
        {/* First sidebar - navigation icons */}
          <Sidebar
              collapsible="none"
              className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
          >
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                    <a href="#">
                      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <RiZzzFill className="size-4" />
                      </div>
                      <div className="grid flex-1 text-left text-xl leading-tight">
                        <span className="truncate font-medium">Dreamy</span>
                        <span className="truncate text-xs">Dream Interpreter</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent className="px-1.5 md:px-0">
                  <SidebarMenu>
                    {dreamData.navMain.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                              tooltip={{
                                children: item.title,
                                hidden: false,
                              }}
                              onClick={() => {
                                setActiveItem(item)

                                // For "New Dream", don't open the second sidebar
                                if (item.title === "New Dream") {
                                  setOpen(false);
                                  // Dispatch event to tell the main content area to show the input form
                                  window.dispatchEvent(new CustomEvent('showNewDreamForm'));
                                } else {
                                  setOpen(true);
                                  // Dispatch event to tell the main content area to show normal view
                                  window.dispatchEvent(new CustomEvent('showDreamsList'));
                                }
                              }}
                              isActive={activeItem?.title === item.title}
                              className="px-2.5 md:px-2 text-lg"
                          >
                            <item.icon className={"text-lg"} />
                            <span>{item.title}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <NavUser user={dreamData.user} />
            </SidebarFooter>
          </Sidebar>

          {/* Second sidebar - dream list (only shown for Past Dreams and other sections, not for New Dream) */}
          <Sidebar collapsible="none" className="hidden flex-1 md:flex">
            <SidebarHeader className="gap-3.5 border-b p-4">
              <div className="flex w-full items-center justify-between">
                <div className="text-foreground text-base font-medium">
                  {activeItem?.title}
                </div>
              </div>
              <SidebarInput placeholder="Search dreams..." />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup className="px-0">
                <SidebarGroupContent>
                  {dreams.map((dream) => (
                      <a
                          href="#"
                          key={dream.id}
                          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                          onClick={() => {
                            // Set active dream for main content display
                            window.activeDream = dream;
                            // Trigger a custom event that the main content can listen for
                            window.dispatchEvent(new CustomEvent('dreamSelected', { detail: dream }));
                          }}
                      >
                        <div className="flex w-full items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${dream.color.split(' ')[0]}`}></span>
                          <span className="font-medium">{dream.title}</span>
                          <span className="ml-auto text-xs">{dream.date}</span>
                        </div>
                        <div className="flex w-full items-center gap-2">
                          <span className="text-xs">Emotion: {dream.emotion}</span>
                        </div>
                        <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                    {dream.description.substring(0, 80)}...
                  </span>
                      </a>
                  ))}
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
      </Sidebar>
  )
}