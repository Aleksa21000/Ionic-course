import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";

import { COURSE_DATA } from "../utils/courseData";

const Filter: React.FC = () => {
  const filterChangeHandler = (event: CustomEvent) => {
    console.log(event);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {COURSE_DATA.map((course) => (
          <IonItem key={course.id} lines="full">
            <IonLabel>{course.title}</IonLabel>
            <IonToggle
              slot="end"
              value={course.id}
              onIonChange={filterChangeHandler}
            />
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Filter;
