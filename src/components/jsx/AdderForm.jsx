import React, { useState } from "react";
import "../css/Component.css";
import NoteItem from "../../../public/NoteItem.js";
import supabase from "../../config/supabaseClient.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import constants from "../constansts";
import FormError from "./FormError";

function AdderForm({ showForm, setShowFrom, addTodo }) {
  const [isExiting, setIsExiting] = useState(false);

  async function pushData(todo) {
    addTodo(todo);
    let { error } = await supabase.from("Todos").insert(todo).single();
    if (error) {
      alert(error.message);
    }
  }
  function sendData(data) {
    let todo = new NoteItem(data["title"], data["desc"], data["dueAt"]);

    pushData(todo);
  }

  const TodoSchema = z.object({
    title: z
      .string()
      .min(constants.title.min.val, constants.title.min.message)
      .max(constants.title.max.val, constants.title.max.message),

    desc: z
      .string()
      .min(constants.desc.min.val, constants.desc.min.message)
      .max(constants.desc.max.val, constants.desc.max.message)
      .optional(),

    dueAt: z.iso.date(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(TodoSchema) });

  if (!showForm) return null;

  function submitForm(data) {
    sendData(data);
    setIsExiting(true);
    setShowFrom(false);
  }

  function handleClose() {
    setShowFrom(false);
  }

  return (
    <div
      id="form-container"
      className={isExiting ? "form-gone" : "form-appear"}
    >
      <p className="page-title">Create a new note </p>
      <div className="close-btn" id="close-btn" onClick={handleClose}>
        <i className="fa-solid fa-xmark fa-2xs"></i>
      </div>
      <form id="form1" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="title">Todo's Title :</label>
        <input
          {...register("title")}
          type="text"
          placeholder="What's is title ?"
          name="title"
          id="title"
          required
        />
        {errors.title && <FormError message={errors.title.message} />}

        <label htmlFor="dueDate">Deadline :</label>
        <input
          type="date"
          name="dueAt"
          id="dueDate"
          {...register("dueAt")}
          required
        />

        {errors.dueAt && <FormError message={errors.dueAt.message} />}

        <label htmlFor="desc">Description :</label>
        <textarea
          placeholder="Write something about title...."
          name="desc"
          {...register("desc")}
          id="desc"
          required
        />
        {errors.desc && <FormError message={errors.desc.message} />}
        <button type="submit" id="note-form-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdderForm;
