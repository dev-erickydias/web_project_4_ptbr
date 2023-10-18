// fechar com esc
const fecharComEsc = (event, popup) => {
  if (event.key === "Escape") {
  popup.classList.remove("popup_opened")
  }
  document.removeEventListener("keydown", (event) => {
    fecharComEsc(event, popup)
  })
}
export {fecharComEsc};



const abrirPopup = (popup) => {
  popup.classList.add("popup_opened")
  document.addEventListener("keydown", (event) => {
    fecharComEsc(event, popup)
  })
}
export { abrirPopup };
