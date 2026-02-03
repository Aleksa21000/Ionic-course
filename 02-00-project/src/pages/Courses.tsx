import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
