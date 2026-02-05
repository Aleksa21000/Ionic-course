import { useState, useContext } from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";

import FabComponent from "../layout/FabComponent";
import IosAddButton from "../layout/IosAddButton";
import AddCourseModal from "../components/AddCourseModal";
import coursesContext from "../store/courses-context";
import CourseItem from "../components/CourseItem";

const Courses: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  const coursesCtx = useContext(coursesContext);

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  const courseAddHandler = (title: string, date: Date) => {
    coursesCtx.addCourse(title, date);
    setIsAdding(false);
  };

  return (
    <>
      <AddCourseModal
        show={isAdding}
        onCancel={cancelAddCourseHandler}
        onSave={courseAddHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IosAddButton startHandler={startAddCourseHandler} />
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {coursesCtx.courses.map((course) => (
              <IonRow key={course?.id}>
                <IonCol sizeMd="4" offsetMd="4">
                  <CourseItem
                    title={course.title}
                    id={course.id}
                    enrolmentDate={course.enrolled}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <FabComponent startHandler={startAddCourseHandler} />
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Courses;
