import { useContext } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import coursesContext from "../store/courses-context";

const AllGoals: React.FC = () => {
  const coursesCtx = useContext(coursesContext);

  const goals = coursesCtx.courses
    .filter((course) => {
      return course.included;
    })
    .map((course) => {
      return course.goals.map((goal) => {
        return { ...goal, courseTitle: course.title };
      });
    })
    .reduce((goalArr, nestedGoals) => {
      let updatedGoalArr = goalArr;

      for (const goal of nestedGoals) {
        updatedGoalArr = updatedGoalArr.concat(goal);
      }
      return updatedGoalArr;
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {goals.length === 0 && (
          <h2 className="ion-text-center">No Goals found.</h2>
        )}
        {goals.length > 0 && (
          <IonList>
            {goals.map((goal) => (
              <IonItem key={goal.id} lines="full">
                <IonLabel>
                  <h2>{goal.text}</h2>
                  <p>{goal.courseTitle}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
