import { useState, useRef } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { type Goal } from "../pages/CourseGoals";

interface EditModalProps {
  show: boolean;
  onCancel: () => void;
  onSave: (goalText: string) => void;
  editedGoal: Goal | null;
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const [error, setError] = useState("");
  const textRef = useRef<HTMLIonInputElement>(null);

  const { show, onCancel, editedGoal, onSave } = props;

  const saveHandler = () => {
    const enteredText = textRef.current!.value;

    if (!enteredText || enteredText.toString().trim().length === 0) {
      setError("Please enter a valid text.");
      return;
    }

    onSave(enteredText.toString());
  };

  return (
    <IonModal isOpen={show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{editedGoal ? "Edit" : "Add"} Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel position="stacked">Your Goal</IonLabel>
                <IonInput type="text" value={editedGoal?.text} ref={textRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow className="ion-text-center">
              <IonCol>
                <IonText color="danger">
                  <p>{error}</p>
                </IonText>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" onClick={onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
