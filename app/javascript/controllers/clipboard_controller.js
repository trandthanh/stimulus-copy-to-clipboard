import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input"];
  static values = {
    disabledContent: String
  }

  copy(event) {
    this.inputTarget.select();
    document.execCommand('copy');
    this._confirmText(event);
  }

  _confirmText(event) {
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = this.disabledContentValue;
  }
}
