import { Footer } from "@/components/Footer";
import { AppSidebar } from "@/components/Sidebar/Sidebar";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "3.25rem",
          } as React.CSSProperties
        }
      >
        <div className="flex flex-1">
          {/* Sidebar - fixed full height */}
          <div className="hidden md:flex max-h-screen sticky top-0 no-scrollbar">
            <AppSidebar />
          </div>

          {/* Main content wrapper */}
          <div className="flex-1 flex flex-col min-h-screen">
            {/* <SidebarProvider */}

            <TopNavigation />
            {/* </SidebarProvider> */}

            {/* Page content that grows */}
            <main className="flex-1 pb-12">{children}</main>

            {/* Footer always at bottom */}
            <div className="fixed bottom-0 left-0 w-full  text-center z-50 ">
              <Footer />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </section>
  );
}
