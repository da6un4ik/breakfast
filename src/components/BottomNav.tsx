import "./BottomNav.css";

export const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavItem icon="skillet" label="Build" active />
      <NavItem icon="restaurant_menu" label="Menu" />
      <NavItem icon="receipt_long" label="Orders" />
      <NavItem icon="person" label="Profile" />
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  active,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) => (
  <a className={`nav-item ${active ? "active" : ""}`}>
    <span className="material-symbols-outlined nav-icon">{icon}</span>
    <p className="nav-label">{label}</p>
  </a>
);
