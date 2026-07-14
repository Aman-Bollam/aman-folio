"use client";

import dynamic from "next/dynamic";
import { Component, ReactNode } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Spline failed to render:", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export default function SplineHero({ scene }: { scene: string }) {
  return (
    <SplineErrorBoundary fallback={<div className="w-full h-full" />}>
      <Spline scene={scene} className="w-full h-full" />
    </SplineErrorBoundary>
  );
}
