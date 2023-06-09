"use client";
import { Card } from "@arco-design/web-react";
import styles from "./page.module.scss";
import { IconEmail, IconRight } from "@arco-design/web-react/icon";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Card hoverable className={styles.card_custom}>
        <div className={styles.card_custom_content}>
          <div className={styles.info}>
            <div className={styles.hello}>
              <h1 className={styles.hello_text}>Hi, I&apos;m</h1>
              <h1 className={styles.hello_text}>Anne Lewis</h1>
            </div>
            <div className={styles.introduction}>
              Lorem ipsum feugiat nibh aliquam pulvinar proin gravida amet
              veroeros. Lorem ipsum dolor sit cursus. Tempus nisl et nullam
              lorem dolor aliquam.
            </div>
            <div className={styles.actions}>
              <div className={styles.schedule_btn}>
                <span>Schedule</span>
                <IconRight style={{ fontSize: 28 }} />
              </div>
              <div className={styles.email_btn}>
                <span>Email</span>
                <IconEmail style={{ fontSize: 28 }} />
              </div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.photo}></div>
        </div>
      </Card>
    </div>
  );
}
