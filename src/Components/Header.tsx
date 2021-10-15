import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1>Simple, traffic-based pricing</h1>
      <p>
        Sign-up for our 30-day trial. <span>No credit card required.</span>
      </p>
    </header>
  );
}

export default Header;
