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
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { type Goal } from "../pages/CourseGoals";

interface EditModalProps {
  show: boolean;
  onCancel: () => void;
  editedGoal: Goal | null;
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const { show, onCancel, editedGoal } = props;

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
                <IonInput type="text" value={editedGoal?.text} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" onClick={onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block">
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
