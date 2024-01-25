const container = document.querySelector(".container");

const images = [
  { name: "mist1", image: "../images/wp4155374-mist-wallpapers.jpg" },
  { name: "mist2", image: "../images/wp4155375-mist-wallpapers.jpg" },
  { name: "mist3", image: "../images/wp4155376-mist-wallpapers.jpg" },
];

const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};

const showCards = () => {
  let output = ``;
  images.forEach(
    ({ name, image }) =>
      (output += `<div class="d-flex justify-content-center mt-5">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${image} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content.</p>
        </div>
    </div>
</div>`)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then((res) => console.log("service worker registered"))
//       .catch((err) => console.log("service worker not refistered:", err));
//   });
// }

const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register(
    "../serviceWorker.js"
  ); //notice the file name
  return swRegistration;
};
const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

const main = async () => {
  check();
  const permission = await requestNotificationPermission();
};

main();
