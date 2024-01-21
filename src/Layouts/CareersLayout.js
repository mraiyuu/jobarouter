import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Careers shape lives, offering paths to growth, purpose, and success.
        Choose wisely, embrace challenges, and excel passionately.
      </p>

      <Outlet />
    </div>
  );
}
