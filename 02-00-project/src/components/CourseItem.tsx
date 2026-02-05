import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface CourseItemProps {
  title: string;
  id: string;
  enrolmentDate: Date;
}

const CourseItem: React.FC<CourseItemProps> = (props) => {
  const { title, id, enrolmentDate } = props;
  return (
    <IonCard className="ion-margin">
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>
          Enrolled on{" "}
          {enrolmentDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-text-right">
          <IonButton fill="clear" routerLink={`/courses/${id}`}>
            View Coars Goals
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default CourseItem;
