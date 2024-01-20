import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Birds, nature's avian wonders, grace the skies with vibrant plumage and
        diverse melodies. From soaring eagles to tiny hummingbirds, their beauty
        captivates.
      </p>

      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
