const btnShare = document.querySelector(
  ".component_content_autor_share-button"
);
const autorBox = document.querySelector(".component_content_autor");
const popUpMessage = document.querySelector(".popup-message");
const cardComponent = document.querySelector(".component_content");

const showPopUpMobile = function () {
  autorBox.style.display = "none";
  popUpMessage.style.display = "flex";
  cardComponent.style.borderRadius = "0px 0px 0px 0px ";
};
const showPopUpDesktop = function () {
  popUpMessage.style.display = "flex";
};

const observer = new ResizeObserver((entries) => {
  if (entries[0].contentRect.width < 740) {
    cardComponent.style.borderRadius = "0px 0px 10px 10px ";

    btnShare.addEventListener("click", showPopUpMobile);
  } else {
    cardComponent.style.borderRadius = "0px 10px 10px 0px ";
    btnShare.removeEventListener("click", showPopUpMobile);
    popUpMessage.style.display = "none";
    autorBox.style.display = "flex";
    btnShare.addEventListener("click", showPopUpDesktop);
  }
});

observer.observe(document.body);
