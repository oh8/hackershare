import { Controller } from 'stimulus';
import { format, render, cancel, register } from 'timeago.js';

export default class extends Controller {
  static targets = ['input', 'list'];

  append(event) {
    const [data, status, xhr] = event.detail;
    this.listTarget.innerHTML =  this.listTarget.innerHTML + xhr.response;
    const timeagos = document.querySelectorAll('.timeago');
    render(timeagos);

    this.inputTarget.value = '';
  }
}