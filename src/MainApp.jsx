import "./App.css";
import UserProfile from "./components/jsx/UserProfile";
import EditForm from "./components/jsx/EditForm";
import NothingElement from "./components/jsx/NothingElement";
import Footer from "./components/jsx/Footer";
import NotesWrapper from "./components/jsx/NotesWrapper";
import Navbar from "./components/jsx/Navbar";
import { useEffect, useState } from "react";
import AddNewNote from "./components/jsx/AddNewNote";
import AdderForm from "./components/jsx/AdderForm";
import Extra from "./components/jsx/Extra";
import supabase from "./config/supabaseClient";
import ErrorMessageCard from "./components/jsx/ErrorMessageCard";
import { Loader } from "lucide-react";
import ContentLoader from "./components/jsx/ContentLoader";
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

async function SupaUpdateNoteByID(id, data) {
  const res = await supabase.from("Todos").update(data).eq("id", id);
  return res;
}
function MainApp() {
  const [showForm, setShowFrom] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  //CRUD OPERATIONS FUNCTIONS

  function addTodo(todo) {
    let currentId = localStorage.getItem("currentId");
    localStorage.setItem("currentId", Number(currentId) + 1);
    if (todo) setData((prev) => [...prev, todo]);
  }

  function deleteNoteById(id) {
    if (id != null) {
      setData((prev) => prev.filter((el) => el.id != id));
    }
  }

  function updateNote(id, changes) {
    if (!isEmpty(changes)) {
      setData((prev) => {
        return prev.map((el) => {
          if (el.id == id) {
            if (changes.title) el.title = changes.title;
            if (changes.desc) el.desc = changes.desc;
            if (changes.due_at) el.due_at = changes.due_at;
          }

          return el;
        });
      });

      let res = SupaUpdateNoteByID(id, changes);
      let errorMsg = res.catch((e) => e);
      if (errorMsg) errorMsg;
    } else {
      return 1;
    }

    return 1;
  }

  let methods = {
    addTodo: addTodo,

    updateNote: updateNote,
  };

  function refreshData(todo) {
    if (todo) setData((prev) => prev);
  }

  useEffect(() => {
    async function loadData() {
      const { error, data } = await supabase.from("Todos").select();

      if (error) {
        setError(error);
        console.log("⚠️Error Occurred while connecting with supabase.")
        if(error.message) console.log('Error Message', error.message)
        if(error.cause) console.log("Cause : ", error.cause);
        if(error.details) console.log("Details : ", error.details);
        if(error.code) console.log("Error Code : ", error.code);
        if(error.hint) console.log("Hint : ", error.hint);
        return;

      } else if (data) {
        setData(data);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <div className="homepage">
        <Navbar />
        <UserProfile />

        {showForm && (
          <AdderForm
            showForm={showForm}
            setShowFrom={setShowFrom}
            {...methods}
          />
        )}

       

        {/* <Extra className='markdown-body' /> */}

        {error == null && data == null && <ContentLoader />}
        {error != null && <ErrorMessageCard error={error} />}
        {data && (
          <NotesWrapper
            data={data}
            deleteNoteById={deleteNoteById}
            refreshData={refreshData}
            updateNote={updateNote}
          />
        )}
      </div>

      <Footer showForm={showForm} setShowFrom={setShowFrom}  />
    </>
  );
}

export default MainApp;
