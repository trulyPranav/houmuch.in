"use client"

import react from "react"
import { useState, useEffect } from "react";

import {
  Navbar
} from "../components"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <>
        <Navbar className="absolute top-0 left-0 w-full z-50" />
      </>
    </div>
  );
}