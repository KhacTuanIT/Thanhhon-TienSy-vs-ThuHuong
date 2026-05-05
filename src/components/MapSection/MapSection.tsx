"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EASE_CINEMATIC } from "@/lib/utils";
import styles from "./MapSection.module.css";

export default function MapSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} id="map" ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: EASE_CINEMATIC }}
      >
        <p className="section-subheading">Địa Điểm Tổ Chức</p>
        <h2 className="section-heading">Bản Đồ</h2>
        <div className="gold-divider" />
      </motion.div>

      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: EASE_CINEMATIC }}
      >
        <div className={`${styles.mapContainer} glass-card`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.9373951897383!2d108.3093514!3d15.487799300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169eebe1917b7ff%3A0xfbed01ebecb5d9e9!2zTmjDoCBow6BuZyBCw6xuaCBBbg!5e0!3m2!1svi!2s!4v1777986720064!5m2!1svi!2s"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Địa điểm tổ chức lễ cưới"
          ></iframe>
        </div>

        <div className={styles.venueInfo}>
          <h3 className={styles.venueName}>Nhà hàng Tiệc cưới Bình An</h3>
          <p className={styles.venueAddress}>
            Nhà hàng Bình An F8Q5+4P9, Tiên Phước, Đà Nẵng, Việt Nam
          </p>
          <a
            href="https://maps.app.goo.gl/VGGRWJykFiGLhZ8BA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsLink}
          >
            Xem Chỉ Đường
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={styles.arrowIcon}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
