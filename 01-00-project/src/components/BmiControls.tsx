import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

interface BmiControlsProps {
  onCalculate: () => void;
  onReset: () => void;
}

const BmiControls: React.FC<BmiControlsProps> = (props) => {
  const { onCalculate, onReset } = props;

  return (
    <IonRow className="ion-margin-top">
      <IonCol size="12" sizeMd="6" className="ion-text-center">
        <IonButton onClick={onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol size="12" sizeMd="6" className="ion-text-center">
        <IonButton color="secondary" onClick={onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
