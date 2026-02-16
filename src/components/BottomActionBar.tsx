import "./BottomActionBar.css";

export const BottomActionBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="bottom-action-wrapper">
      <button className="bottom-action-btn" onClick={onClick}>
        <span>PREVIEW PLATE</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};
