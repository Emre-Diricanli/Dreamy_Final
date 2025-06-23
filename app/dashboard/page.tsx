"use client"

import * as React from "react"
import { AppSidebar, dreamData } from "@/components/app-sidebar"
import { NewDreamForm } from "@/components/new-dream-form"
import { DreamDetail, Dream } from "@/components/dream-detail"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DarkModeToggle } from "@/components/ui/darkModeToggle"

export default function Page() {
  const [selectedDream, setSelectedDream] = React.useState<Dream | null>(null);
  const [viewMode, setViewMode] = React.useState("dreamsList"); // "dreamsList" or "newDream"

  React.useEffect(() => {
    // Listen for dream selection events
    const handleDreamSelected = (event: CustomEvent<Dream>) => {
      setSelectedDream(event.detail);
      setViewMode("dreamsList");
    };

    // Listen for mode change events
    const handleShowNewDreamForm = () => {
      setViewMode("newDream");
      setSelectedDream(null);
    };

    const handleShowDreamsList = () => {
      setViewMode("dreamsList");
    };

    // Type assertion for CustomEvent
    window.addEventListener('dreamSelected', handleDreamSelected as EventListener);
    window.addEventListener('showNewDreamForm', handleShowNewDreamForm);
    window.addEventListener('showDreamsList', handleShowDreamsList);

    // Initial dream selection (optional)
    if (dreamData.dreams.length > 0 && viewMode === "dreamsList") {
      setSelectedDream(dreamData.dreams[0]);
    }

    return () => {
      window.removeEventListener('dreamSelected', handleDreamSelected as EventListener);
      window.removeEventListener('showNewDreamForm', handleShowNewDreamForm);
      window.removeEventListener('showDreamsList', handleShowDreamsList);
    };
  }, [viewMode]);

  return (
      <SidebarProvider
          style={
            {
              "--sidebar-width": "350px",
            } as React.CSSProperties
          }
      >
        <AppSidebar />
        <SidebarInset className="bg-gradient-to-br from-muted/50 to-background">
          <header className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b p-4 shadow-sm rounded-b-lg">
            <SidebarTrigger className="-ml-1" />
            <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
            />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">All Dreams</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {viewMode === "newDream"
                        ? "New Dream"
                        : (selectedDream ? selectedDream.title : "Dreams")}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="absolute right-5">
              <DarkModeToggle />
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-6 max-w-4xl mx-auto w-full">
            {viewMode === "newDream" ? (
                <NewDreamForm />
            ) : selectedDream ? (
                <DreamDetail
                    dream={selectedDream}
                    showRelatedDreams={true}
                    showSleepQuality={true}
                    showRecurringElements={true}
                />
            ) : (
                <div className="text-center p-12 animate-in fade-in slide-in-from-top-2">
                  <h2 className="text-xl font-medium mb-2">Select a dream from the sidebar</h2>
                  <p className="text-gray-500 dark:text-gray-400">Click on any dream entry to view its details</p>
                </div>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
  )
}