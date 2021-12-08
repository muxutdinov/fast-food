import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInto = () => {
  return (
    <div className="Featured">
      <div className="FeaturedItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredManyContainer">
          <span className="featuredMoney">$5,543</span>
          <span className="featuredMoneyRate">
            -32 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="FeaturedItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredManyContainer">
          <span className="featuredMoney">$2,123</span>
          <span className="featuredMoneyRate">
            -56 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="FeaturedItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredManyContainer">
          <span className="featuredMoney">$9,321</span>
          <span className="featuredMoneyRate">
            +42 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInto;
