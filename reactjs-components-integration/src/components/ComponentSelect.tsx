//dot-web-samples for Biometric authentication for Biometra
import { Step } from "../types";
import styles from "../styles/button.module.css";

interface Props {
  setStep: (step: Step) => void;
}

function ComponentSelect({ setStep }: Props) {
  const handleDocumentClick = () => {
    setStep(Step.DOCUMENT_CAPTURE);
  };

  const handleFaceClick = () => {
    setStep(Step.FACE_CAPTURE);
  };

  const handleMagnifEyeLivenessClick = () => {
    setStep(Step.MAGNIFEYE_LIVENESS);
  };

  return (
    <div>
      <button className={styles.primary} onClick={handleDocumentClick}>
        Document
      </button>
      <button className={styles.primary} onClick={handleFaceClick}>
        Face
      </button>
      <button className={styles.primary} onClick={handleMagnifEyeLivenessClick}>
        MagnifEye Liveness
      </button>
    </div>
  );
}

export default ComponentSelect;
