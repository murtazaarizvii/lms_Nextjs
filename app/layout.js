import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { CourseProvider } from "@/context/CourseContext";

export const metadata = {
  title: "LMS Frontend",
  description: "Learning Management System built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <CourseProvider>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-6">
              {children}
            </main>
            <Footer />
          </CourseProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
