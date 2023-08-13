import html2canvas from "html2canvas";

const downloadImage = () => {
  const avatarId = document.getElementById("avatar-container") as HTMLElement;

  html2canvas(avatarId, { backgroundColor: null }).then(function (canvas) {
    const link = document.createElement("a");
    link.download = "avatar.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};

export default downloadImage;
