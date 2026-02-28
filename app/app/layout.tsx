// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

// export default function AppLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen w-full">
//         <AppSidebar />
//         <main className="w-full">
//           <SidebarTrigger />
//           {children}
//         </main>
//       </div>
//     </SidebarProvider>
//   );
// }

import AppLayoutClient from "./layout-client";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppLayoutClient>{children}</AppLayoutClient>;
}