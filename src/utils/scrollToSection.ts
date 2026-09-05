export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function scrollToOrder() {
  const order = document.getElementById('order');
  if (order) order.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else {
    window.history.pushState({}, '', '/#order');
    window.dispatchEvent(new Event('chicken-bros:navigate'));
  }
}
