class NegociacaoController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    const negociacao = new Negociacao(
      this._inputData,
      this._inputQuantidade,
      this._inputValor
    );
  }
}
