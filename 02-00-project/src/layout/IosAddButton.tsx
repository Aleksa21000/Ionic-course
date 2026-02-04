import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";

interface IosAddButtonProps {
  startHandler: () => void;
}

const IosAddButton: React.FC<IosAddButtonProps> = (props) => {
  const { startHandler } = props;

  return (
    <IonButtons slot="end">
      <IonButton onClick={startHandler}>
        <IonIcon slot="icon-only" icon={addOutline} />
      </IonButton>
    </IonButtons>
  );
};

export default IosAddButton;
