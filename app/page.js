"use client"

import react from "react"
import { useState, useEffect } from "react";

import {
  Navbar,
  Landing,
  Browse
} from "../components"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <>
        <Navbar className="absolute top-0 left-0 w-full z-50" />
        <Landing />
        <Browse />
      </>
    </div>
  );
}