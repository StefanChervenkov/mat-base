
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <BrowserRouter>
        
        <NavBar />
        <div className="flex-grow">
            <AppRoutes />
        </div>
        </BrowserRouter>


    </div>
  );
}   // End of App component

export default App;