import Promotion from "../../promotion/Promotion";

export default function PromotionSection({ marginTop, marginBottom }) {
  return (
    <div style={{ marginTop, marginBottom }}>
      <Promotion />
    </div>
  );
}
