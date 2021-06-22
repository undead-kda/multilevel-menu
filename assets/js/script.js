window.onload = () => {
      let buttonOpen = document.getElementById('btn-menu-open');
      let buttonClose = document.getElementById('btn-menu-close');
      let topMenu = document.querySelector('.topmenu');

      // Open button click
      if (buttonOpen) buttonOpen.onclick = () => {
         buttonClose.style.display = "block";
         buttonOpen.style.display = "none";
         if (topMenu) {
            topMenu.style.display = 'flex';
         }
         
      }

      // Close button click
      if (buttonClose) buttonClose.onclick = () => {
         let subMenuList = topMenu.querySelectorAll('.submenu');

         for(let i = 0; i < subMenuList.length; i++) {
            if (subMenuList[i].style.display != '') {
               subMenuList[i].style.display = '';
            }
         }

         buttonClose.style.display = "none";
         buttonOpen.style.display = "block";
         if (topMenu) {
            topMenu.style.display = 'none';
         }
      }

      // Top menu elements click
      topMenu.addEventListener('click', function(event) {
         let menuLink = event.target.closest('li');
         let parentElement = menuLink.parentNode;
         let childSubMenuList = parentElement.querySelectorAll('.submenu');

         for(let i = 0; i < childSubMenuList.length; i++) {
            if (childSubMenuList[i].style.display != '') {
               childSubMenuList[i].style.display = '';
            }
         }

         let subMenu = menuLink.querySelector('.submenu');
         
         if (subMenu) {
            if (subMenu.style.display == '') {
               subMenu.style.display = 'flex';
            } else {
               subMenu.style.display = '';
            }
            
         }
      });
}