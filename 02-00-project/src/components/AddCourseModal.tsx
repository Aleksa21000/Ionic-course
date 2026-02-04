import "./addCourseModal.css";
import { useMemo } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
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

interface AddCourseModalProps {
  show: boolean;
  onCancel: () => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = (props) => {
  const { show, onCancel } = props;
  const todayIso = useMemo(() => new Date().toISOString(), []);

  return (
    <IonModal isOpen={show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel position="stacked">Course Title</IonLabel>
                <IonInput type="text" />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonLabel position="stacked">Enrolment Date</IonLabel>
                <IonDatetimeButton
                  id="enrolment-date-btn"
                  datetime="date"
                  className="ion-margin-top ion-margin-end ion-margin-bottom"
                />
              </IonItem>
              <IonModal
                trigger="enrolment-date-btn"
                keepContentsMounted
                className="datetime-modal"
              >
                <IonDatetime
                  id="date"
                  presentation="date"
                  value={todayIso}
                  formatOptions={{
                    date: {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    },
                  }}
                ></IonDatetime>
              </IonModal>
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

export default AddCourseModal;
