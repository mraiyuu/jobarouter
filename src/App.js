import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/Careers/Careers";
import NotFound from "./pages/NotFound";
import { careersDetailsLoader } from "./pages/Careers/CareerDetails";
import CareerDetails from "./pages/Careers/CareerDetails";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import CareersError from "./pages/Careers/CareersError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route 
        index 
        element={<Careers />} 
        loader={careersLoader} 
        />
        <Route 
        path=":id" 
        element={<CareerDetails />} 
        loader={careersDetailsLoader}
        errorElement = {<CareersError />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//json-server -p 4000 watch ./data/db.json
