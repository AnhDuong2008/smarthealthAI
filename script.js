document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.querySelector('.bottom-bar');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} SmartHealth Community. Mọi thông tin chỉ mang tính tham khảo.`;
  }
});
