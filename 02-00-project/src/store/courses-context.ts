import React from "react";

export interface Course {
  id: string;
  title: string;
  enrolled: Date;
  goals: { id: string; text: string }[];
}

interface coursesContextProps {
  courses: Course[];
  addCourse: (courseTitle: string, courseDate: Date) => void;
  addGoal: () => void;
  deleteGoal: () => void;
  updateGoal: () => void;
}

const coursesContext = React.createContext<coursesContextProps>({
  courses: [],
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
});

export default coursesContext;
