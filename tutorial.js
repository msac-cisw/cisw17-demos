const codeBlocks = document.querySelectorAll('.tutorial-content pre');

function updateScrollableCodeBlocks() {
  codeBlocks.forEach((block, index) => {
    if (block.scrollWidth > block.clientWidth) {
      block.tabIndex = 0;
      block.setAttribute('role', 'region');
      block.setAttribute('aria-label', `Code block ${index + 1}`);
    } else {
      block.removeAttribute('tabindex');
      block.removeAttribute('role');
      block.removeAttribute('aria-label');
    }
  });
}

const codeBlockObserver = new ResizeObserver(updateScrollableCodeBlocks);
codeBlocks.forEach(block => codeBlockObserver.observe(block));
document.addEventListener('DOMContentLoaded', updateScrollableCodeBlocks);
document.fonts.ready.then(updateScrollableCodeBlocks);
