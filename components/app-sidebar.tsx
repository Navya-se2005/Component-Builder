"use client"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion"
import { useState } from "react"

export function AppSidebar() {
  //const [open, setOpen] = useState(false)
  return (
    // <div className="flex bg-gray-100 dark:bg-neutral-800 border rounded-md h-screen">
    <Sidebar className="bg-white dark:bg-neutral-950 border-r dark:border-neutral-800">
      <SidebarHeader className="border-b dark:border-neutral-800">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-blac font-bold">
            CB
          </div>
         
            <span className="font-semibold text-sm tracking-wide">Component Builder</span>
          
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs tracking-wide uppercase text-muted-foreground justify-center">Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sm hover:bg-gray-300 dark:hover:ng-neutral-900">
                  <Link href="/app">
                  Component Builder
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="collections">
                        <AccordionTrigger className="rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">Collections</AccordionTrigger>
                        <AccordionContent className="pl-5">
                            <div className="flex flex-col gap-1">
                                <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">+ New Collection</SidebarMenuButton>
                                 <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">My APIs</SidebarMenuButton>
                                  <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">Test Requests</SidebarMenuButton>

                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* history */}

                    <AccordionItem value="history">
                        <AccordionTrigger className="rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">History</AccordionTrigger>
                        <AccordionContent className="pl-5">
                            <div>
                                 <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">Today</SidebarMenuButton>
                                  <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">Yesterday</SidebarMenuButton>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* envi */}
                    <AccordionItem value="env">
                        <AccordionTrigger className="rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">
                            Environments
                        </AccordionTrigger>
                        <AccordionContent className="pl-5">
                            <div>
                                 <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">No Environment</SidebarMenuButton>
                                  <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">+ Add Environment</SidebarMenuButton>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* api */}
                      <AccordionItem value="apis">
                        <AccordionTrigger className="rounded-md px-2 py-2 text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">
                            APIs
                        </AccordionTrigger>
                        <AccordionContent className="pl-5">
                            <div>
                                 <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">My APIs</SidebarMenuButton>
                                  <SidebarMenuButton className="text-sm hover:bg-gray-200 dark:hover:bg-neutral-800">+ Create APIs</SidebarMenuButton>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              
            
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


      <SidebarFooter className="border-t dark:border-neutral-800 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-start hover:bg-gray-200 dark:hover:bg-neutral-800" >
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    // </div>
  )
}
