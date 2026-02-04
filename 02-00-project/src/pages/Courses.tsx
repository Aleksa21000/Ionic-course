import { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";

import { courseDataMapper } from "../utils/courseDataMapper";
import FabComponent from "../layout/FabComponent";
import IosAddButton from "../layout/IosAddButton";
import AddCourseModal from "../components/AddCourseModal";

const Courses: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  return (
    <>
      <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler} />
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
          <IonGrid>{courseDataMapper}</IonGrid>
          {isPlatform("android") && (
            <FabComponent startHandler={startAddCourseHandler} />
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Courses;
