import { useContext } from "react";
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

import coursesContext from "../store/courses-context";

const Filter: React.FC = () => {
  const coursesCtx = useContext(coursesContext);

  const filterChangeHandler = (event: CustomEvent) => {
    coursesCtx.changeCourseFilter(event.detail.value, event.detail.checked);
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
        {coursesCtx.courses.map((course) => (
          <IonItem key={course.id} lines="full">
            <IonLabel>{course.title}</IonLabel>
            <IonToggle
              slot="end"
              checked={course.included}
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
