import "./App.css";
import UserProfile from "./components/UserProfile";
import EditForm from "./components/EditForm";
import NothingElement from "./components/NothingElement";
import Footer from "./components/Footer";
import NotesWrapper from "./components/NotesWrapper";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import AdderForm from "./components/AdderForm";
import Extra from "./components/Extra";

function MainApp() {
  const [showForm, setShowFrom] = useState(false);

  {
    useEffect(() => {
      console.log("State", { showForm });
      return () => {};
    }, [showForm]);
  }

  return (
    <div className="homepage">
      <Navbar />
      <UserProfile />

      {showForm && <AdderForm showForm={showForm} setShowFrom={setShowFrom} />}

      <Footer showForm={showForm} setShowFrom={setShowFrom} />
      <NotesWrapper />

      
      {/* <Extra className='markdown-body' /> */}
    </div>
  );
}

export default MainApp;
