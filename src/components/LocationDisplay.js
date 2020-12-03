import React, { Component, useState } from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import "../styles/App.css";

export default function LocationDisplay() {
  const location = useLocation();

  return <div>{location.pathname}</div>;
}
