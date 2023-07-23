export default (context, inject) => {
  inject('hello', () => console.log(window.dataLayer))
}