import React, { Component } from "react";
import Location from "./Location";
import BestSellers from "./BestSellers";
import CustomerService from "./CustomerService";
import Deals from "./Deals";
import NewReleases from "./NewReleases";
import Gift from "./Gift";
import Foods from "./Foods";
import GiftCards from "./GiftCards";
import Shipping from "./Shipping";
import Registry from "./Registry";
import School from "./School";

import "./BlueSecondTop.css";

export default class BlueSecondTopLine extends Component {
  render() {
    return (
      <div className="bluesecondtopline">
        <Location />
        <BestSellers />
        <CustomerService />
        <Deals />
        <NewReleases />
        <Gift />
        <Foods />
        <GiftCards />
        <Shipping />
        <Registry />
        <School />
      </div>
    );
  }
}
