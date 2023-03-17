import "../components/InstagramIcon";
import "../components/TwitterIcon";
import "../components/EmailIcon";

export const fillFooterIcons = () => {
  const anchors = document.querySelectorAll(".icon-container .icon");

  const icons = {
    instagram: document.createElement("instagram-icon"),
    twitter: document.createElement("twitter-icon"),
    email: document.createElement("email-icon")
  };

  for (const anchor of anchors) {
    const iconTag = anchor.classList[1];
    const icon = icons[iconTag];

    anchor.appendChild(icon);
  }
};
