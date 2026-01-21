import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Courses: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works, courses page!</h2>
      </IonContent>
    </>
  );
};

export default Courses;
