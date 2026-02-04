import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";

interface FabComponentProps {
  startHandler: () => void;
}

const FabComponent: React.FC<FabComponentProps> = (props) => {
  const { startHandler } = props;
  return (
    <IonFab horizontal="end" vertical="bottom" slot="fixed">
      <IonFabButton color="secondary" onClick={startHandler}>
        <IonIcon icon={addOutline} />
      </IonFabButton>
    </IonFab>
  );
};

export default FabComponent;
