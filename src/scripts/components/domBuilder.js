const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="add-auth-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
    <div id="cart"></div>
  </div>`;
};

export default domBuilder;