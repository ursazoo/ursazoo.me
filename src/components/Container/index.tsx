"use client";
import React from "react";
import styles from "./index.module.scss";
import Copyright from "@/components/Copyright";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.background}>
      <div className={styles.main}>{children}</div>
      <Copyright />
    </div>
  );
}
