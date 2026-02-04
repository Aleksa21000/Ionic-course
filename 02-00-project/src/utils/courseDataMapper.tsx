import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";

import { COURSE_DATA } from "../utils/courseData";

export const courseDataMapper = COURSE_DATA.map((course) => (
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
