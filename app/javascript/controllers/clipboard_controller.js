import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["source"];

  copy(event) {
    this.sourceTarget.select();
    document.execCommand('copy');
    this._confirmText(event);
  }

  _confirmText(event) {
    const button = event.currentTarget
    button.innerText = "Copied";
    setTimeout((event) => {
      button.innerText = "Copy to clipboard";
    }, 2000)
  }
}
