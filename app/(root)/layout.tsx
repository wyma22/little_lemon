import Nav from "@/components/Nav";
import { auth } from "@clerk/nextjs";
import About from "./about/page";
import Footer from "./footer/page";
import ThisWeekSpecials from "./specials/page";
import Testimonial from "./testimonial/testimonial";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  return (
    <main>
      <div>
        <div>
          <Nav userId={userId} />
          {children}
          <ThisWeekSpecials />
          <Testimonial />
          <About />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Layout;