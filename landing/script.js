const copyBtn = document.getElementById('copy-btn');
const installCmd = document.getElementById('install-cmd');

if (copyBtn && installCmd) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(installCmd.textContent.trim());
      copyBtn.textContent = 'copied';
    } catch {
      copyBtn.textContent = 'select & copy';
    }
    setTimeout(() => { copyBtn.textContent = 'copy'; }, 1800);
  });
}
