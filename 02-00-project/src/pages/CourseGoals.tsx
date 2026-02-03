import { useState, useRef } from "react";
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
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
  IonToast,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { addOutline, create, trash } from "ionicons/icons";
import { useParams } from "react-router";

import { COURSE_DATA } from "../utils/courseData";
import EditModal from "../components/EditModal";

export type Goal = { id: string; text: string };

const CourseGoals: React.FC = () => {
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const selectedCourse = COURSE_DATA.find((c) => c.id === selectedCourseId);

  const startDeleteGoalHandler = () => {
    slidingOptionsRef.current?.closeOpened();
    setStartedDeleting(true);
  };

  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    setToastMessage("Deleted goal!");
  };

  const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    slidingOptionsRef.current?.closeOpened();
    const goal = selectedCourse?.goals.find((g) => g.id === goalId);
    if (!goal) return;
    setIsEditing(true);
    setSelectedGoal(goal);
  };

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };

  const startAddGoalHandler = () => {
    setIsEditing(true);
    setSelectedGoal(null);
  };

  return (
    <>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
      />
      <IonToast
        isOpen={!!toastMessage}
        duration={2000}
        onDidDismiss={() => {
          setToastMessage("");
        }}
        message={toastMessage}
      />
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you want to delete this goal? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => setStartedDeleting(false),
          },
          {
            text: "Yes",
            handler: deleteGoalHandler,
          },
        ]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/courses/list" />
            </IonButtons>
            <IonTitle>
              {selectedCourse ? selectedCourse.title : "No course found!"}
            </IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddGoalHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedCourse && (
            <IonList className="ion-no-padding">
              {selectedCourse.goals.map((goal) => (
                <IonItemSliding key={goal.id} ref={slidingOptionsRef}>
                  <IonItemOptions side="start">
                    <IonItemOption
                      onClick={startDeleteGoalHandler}
                      color={"danger"}
                    >
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
                    <IonItemOption
                      onClick={startEditGoalHandler.bind(null, goal.id)}
                    >
                      <IonIcon slot="icon-only" icon={create} />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>
          )}
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default CourseGoals;
