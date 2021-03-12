const folders = document.querySelectorAll("[wm-folder]");
  
const toggleFolderChildrenVisibility = folder => {
  const folderChildren = folder.nextElementSibling;
  displayAtual = folderChildren.style.display;
  folderChildren.style.display = displayAtual === "" ? "none" : "";
};

folders.forEach(folder => {
  folder.onclick = (e) => {
    toggleFolderChildrenVisibility(folder);
  }

  toggleFolderChildrenVisibility(folder);
});