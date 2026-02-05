import "./addCourseModal.css";
import { useMemo, useRef, useState } from "react";
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
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface AddCourseModalProps {
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = (props) => {
  const [error, setError] = useState("");

  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const { show, onCancel, onSave } = props;

  const todayIso = useMemo(() => new Date().toISOString(), []);

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value;
    const selectedDate = dateRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0 ||
      selectedDate.toString().trim().length === 0
    ) {
      setError("Please enter a valid title and select valid date.");
      return;
    }
    setError("");

    onSave(enteredTitle.toString(), new Date(selectedDate.toString()));
  };

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
                <IonInput type="text" ref={titleRef} />
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
                  ref={dateRef}
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

export default AddCourseModal;
