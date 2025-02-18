"use client";

import React from "react";
import { ReactLenis } from 'lenis/react'


const ContainerLenis = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default ContainerLenis;
