import RenderElement from "./RenderElement.mod";

export const renderDocument = () => {
  const documentBody = document.querySelector('body');
  documentBody.innerHTML = '';

  let sections = [];

  sections.forEach(section => {
    let renderElement = new RenderElement(section, documentBody);
    renderElement.render();
  });

}