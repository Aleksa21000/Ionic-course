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

import { COURSE_DATA } from "../utils/courseData";

const AllGoals: React.FC = () => {
  const goals = COURSE_DATA.map((course) => {
    return course.goals.map((goal) => {
      return { ...goal, courseTitle: course.title };
    });
  }).reduce((goalArr, nestedGoals) => {
    let updatedGoalArr = goalArr;

    for (const goal of nestedGoals) {
      updatedGoalArr = updatedGoalArr.concat(goal);
    }
    return updatedGoalArr;
  });

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
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
