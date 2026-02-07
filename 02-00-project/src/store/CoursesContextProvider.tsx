import { ReactNode, useState } from "react";
import coursesContext, { Course, Goal } from "./courses-context";

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

    setCourses((courses) => {
      return courses.concat(newCourse);
    });
  };

  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text,
    };

    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId,
      );

      const updatedCourseGoals =
        updatedCourses[updatedCourseIndex].goals.concat(newGoal);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId,
      );

      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.filter((goal) => goal.id !== goalId);

      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((courses) => {
      const updatedCourses = [...courses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId,
      );

      const updatedCourseGoals =
        updatedCourses[updatedCourseIndex].goals.slice();
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId,
      );

      const updatedGoal = {
        ...updatedCourseGoals[updatedCourseGoalIndex],
        text: newText,
      };
      updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;

      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };
      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

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
