import { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";

import { COURSE_DATA } from "../utils/courseData";
import AddCourseModal from "../components/AddCourseModal";

const courseDataMapper = COURSE_DATA.map((course) => (
  <IonRow key={course?.id}>
    <IonCol sizeMd="4" offsetMd="4">
      <IonCard className="ion-margin">
        <IonCardHeader>
          <IonCardTitle>{course?.title}</IonCardTitle>
          <IonCardSubtitle>
            Enrolled on{" "}
            {course.enrolled.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <div className="ion-text-right">
            <IonButton fill="clear" routerLink={`/courses/${course.id}`}>
              View Coars Goals
            </IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
));

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
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>{courseDataMapper}</IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Courses;
