import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { COURSE_DATA } from "../utils/courseData";

const courseDataMapper = COURSE_DATA.map((course) => (
  <IonRow key={course?.id}>
    <IonCol sizeMd="4" offsetMd="4">
      <IonCard className="ion-margin">
        <IonCardContent className="ion-text-center">
          <h2 className="ion-text-center">{course?.title}</h2>
          <IonButton
            routerLink={`/courses/${course.id}`}
            className="ion-margin-top"
          >
            View Coars Goals
          </IonButton>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
));

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>{courseDataMapper}</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
