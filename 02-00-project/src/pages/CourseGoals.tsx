import { useState, useRef } from "react";
import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { useParams } from "react-router";

import { COURSE_DATA } from "../utils/courseData";
import FabComponent from "../layout/FabComponent";
import IosAddButton from "../layout/IosAddButton";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";

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
              <IosAddButton startHandler={startAddGoalHandler} />
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {selectedCourse && (
            <IonList className="ion-no-padding">
              {selectedCourse.goals.map((goal) => (
                <EditableGoalItem
                  key={goal.id}
                  text={goal.text}
                  slidingRef={slidingOptionsRef}
                  onStartDelete={startDeleteGoalHandler}
                  onStartEdit={startEditGoalHandler.bind(null, goal.id)}
                />
              ))}
            </IonList>
          )}
          {isPlatform("android") && (
            <FabComponent startHandler={startAddGoalHandler} />
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default CourseGoals;
