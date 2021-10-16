import classes from "./Main.module.css";

function Main() {
  return (
    <main className={classes.main}>
      <div className={classes["first-section"]}>
        <p className={classes.pageviews}>100k Pageviews</p>
        <div className={classes["selector-bar-container"]}>
          <div className={classes["progress-bar-container"]}>
            <div className={classes["current-progress-bar"]}>
              <div className={classes["icon-slider-container"]}>
                <img src="./images/icon-slider.svg" alt="slider icon" />
              </div>
            </div>
          </div>
        </div>
        <p className={classes.price}>
          $16.00 <span>/ month</span>
        </p>
        <div className={classes["billing-options"]}>
          <p>Monthly Billing</p>
          <label className={classes.switch}>
            <input type="checkbox" />
            <span className={`${classes.slider} ${classes.round}`}></span>
          </label>
          <p>Yearly Billing</p>
          <div className={classes.discount}>
            <p>
              25% <span>discount</span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["horizontal-line"]} />
      <div className={classes["second-section"]}>
        <div className={classes.features}>
          <div>
            <img src="./images/icon-check.svg" alt="check icon" />
            <p>Unlimited websites</p>
          </div>
          <div>
            <img src="./images/icon-check.svg" alt="check icon" />
            <p>100% data ownership</p>
          </div>
          <div>
            <img src="./images/icon-check.svg" alt="check icon" />
            <p>Email reports</p>
          </div>
        </div>
        <button>Start my trial</button>
      </div>
    </main>
  );
}

export default Main;
