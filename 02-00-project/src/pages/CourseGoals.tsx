import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";
import { useParams } from "react-router";
import { COURSE_DATA } from "../utils/courseData";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const deleteGoalHandler = () => {
    console.log("Deleted...");
  };

  const startEditGoalHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Editing...");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "No course found!"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && (
          <IonList className="ion-no-padding">
            {selectedCourse.goals.map((goal) => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side="start">
                  <IonItemOption onClick={deleteGoalHandler} color={"danger"}>
                    <IonIcon slot="icon-only" icon={trash} />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem
                  lines="full"
                  detail={false}
                  // button
                  // onClick={deleteItemHandler}
                >
                  <IonLabel>{goal.text}</IonLabel>
                  {/* <IonButton slot="end" onClick={startEditGoalHandler}>
                  <IonIcon slot="icon-only" icon={create} />
                </IonButton> */}
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={startEditGoalHandler}>
                    <IonIcon slot="icon-only" icon={create} />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
