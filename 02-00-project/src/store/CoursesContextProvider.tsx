import { ReactNode, useState } from "react";
import coursesContext, { Course } from "./courses-context";

type Props = {
  children?: ReactNode;
};

const CoursesContextProvider = ({ children }: Props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "Ionic + React - practical guide",
      enrolled: new Date(),
      goals: [{ id: "c1g1", text: "Finish the course! - Ionic + React" }],
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title,
      enrolled: date,
      goals: [],
    };

    setCourses((prevState) => {
      return prevState.concat(newCourse);
    });
  };

  const addGoal = () => {};

  const deleteGoal = () => {};

  const updateGoal = () => {};

  return (
    <coursesContext.Provider
      value={{
        courses,
        addGoal,
        addCourse,
        deleteGoal,
        updateGoal,
      }}
    >
      {children}
    </coursesContext.Provider>
  );
};

export default CoursesContextProvider;
