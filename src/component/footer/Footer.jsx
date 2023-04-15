import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.info}>
          <h3 style={styles.title}>Contact Us</h3>
          <ul style={styles.list}>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
              123 Main St, Anytown USA 12345
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} style={styles.icon} />
              555-555-5555
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
              info@bluecollarjobs.com
            </li>
          </ul>
        </div>
        <div style={styles.social}>
          <h3 style={styles.title}>Follow Us</h3>
          <ul style={styles.list}>
            <li>
              <a href="https://www.facebook.com/bluecollarjobs">
                <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/bluecollarjobs">
                <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/bluecollarjobs">
                <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.text}>&copy; 2023 Blue Collar Worker Hiring System</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1E3F66",
    color: "#fff",
    textAlign: "center",
    padding: "2rem",
    marginTop: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  info: {
    flex: 1,
    marginRight: "2rem",
  },
  social: {
    flex: 1,
    marginLeft: "2rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  icon: {
    marginRight: "0.5rem",
  },
  bottom: {
    marginTop: "2rem",
  },
  text: {
    fontSize: "1.2rem",
    margin: 0,
  },
};

export default Footer;
