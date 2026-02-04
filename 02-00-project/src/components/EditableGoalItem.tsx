import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";

interface EditableGoalItemProps {
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  text: string;
}

const EditableGoalItem: React.FC<EditableGoalItemProps> = (props) => {
  const { text, slidingRef, onStartDelete, onStartEdit } = props;

  return (
    <IonItemSliding ref={slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption onClick={onStartDelete} color={"danger"}>
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines="full" detail={false}>
        <IonLabel>{text}</IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={onStartEdit}>
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
