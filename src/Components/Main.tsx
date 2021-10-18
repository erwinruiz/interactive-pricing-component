import classes from "./Main.module.css";
import { ChangeEvent, useState } from "react";

let pageviews, price;

function Main() {
  const [userInput, setUserInput] = useState<string>("3");
  const [isBillingYearly, setIsBillingYearly] = useState<Boolean>(false);

  const userInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const billingOptionsHandler = () => {
    setIsBillingYearly((state) => !state);
  };

  switch (userInput) {
    case "1":
      pageviews = "10k";
      if (isBillingYearly) {
        price = 8 - 8 * 0.25;
      } else {
        price = 8;
      }
      break;

    case "2":
      pageviews = "50k";
      if (isBillingYearly) {
        price = 12 - 12 * 0.25;
      } else {
        price = 12;
      }
      break;

    case "3":
      pageviews = "100k";
      if (isBillingYearly) {
        price = 16 - 16 * 0.25;
      } else {
        price = 16;
      }
      break;

    case "4":
      pageviews = "500k";
      if (isBillingYearly) {
        price = 24 - 24 * 0.25;
      } else {
        price = 24;
      }
      break;

    case "5":
      pageviews = "1m";
      if (isBillingYearly) {
        price = 36 - 36 * 0.25;
      } else {
        price = 36;
      }
      break;

    default:
      pageviews = 100;
      price = 16;
  }

  return (
    <main className={classes.main}>
      <div className={classes["first-section"]}>
        <p className={classes.pageviews}>{pageviews} Pageviews</p>
        <input
          className={classes["input-range"]}
          type="range"
          min="1"
          max="5"
          defaultValue={userInput.toString()}
          onChange={userInputHandler}
        />
        <p className={classes.price}>
          ${price.toFixed(2)}
          <span> / month</span>
        </p>
        <div className={classes["billing-options"]}>
          <p>Monthly Billing</p>
          <label className={classes.switch}>
            <input type="checkbox" onChange={billingOptionsHandler} />
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
