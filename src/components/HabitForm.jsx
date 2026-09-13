import { useState, useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";

export default function HabitForm() {
  const habitsContext = useContext(HabitsContext);
  if (!habitsContext) throw new Error("HabitForm precisa estar dentro de HabitsProvider.");

  const { addHabit } = habitsContext;
  
  // ... mantenha o useState do form e error igual estava antes ...
  
  function handleSubmit(event) {
    event.preventDefault();
    // ... validação ...
    addHabit({ // Substitua onAddHabit por addHabit
      id: crypto.randomUUID(),
      title,
      goal,
      completed: false,
    });
    // ... limpar form ...
  }
  
  // ... retorno do JSX ...
}