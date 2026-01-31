(function () {
  const storageKey = "ewm-theme";
  const toggle = document.getElementById("theme-switch");
  const notificationsToggle = document.getElementById("notifications-toggle");
  const profileToggle = document.getElementById("profile-toggle");

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (toggle) toggle.checked = true;
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (toggle) toggle.checked = false;
    }
  };

  const saved = localStorage.getItem(storageKey);
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  if (toggle) {
    toggle.addEventListener("change", () => {
      const next = toggle.checked ? "dark" : "light";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (notificationsToggle) {
      const notificationsContainer = notificationsToggle.closest(".dropdown-container");
      if (notificationsToggle.checked && notificationsContainer && !notificationsContainer.contains(target)) {
        notificationsToggle.checked = false;
      }
    }

    if (profileToggle) {
      const profileContainer = profileToggle.closest(".dropdown-container");
      if (profileToggle.checked && profileContainer && !profileContainer.contains(target)) {
        profileToggle.checked = false;
      }
    }
  });
})();
