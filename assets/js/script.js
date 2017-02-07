

const navItems = [
{
  label: 'Recipes',
  link: '#recipes',
  navid: '0',
  header: 'Recipes',
  image: 'url("http://unsplash.it/700/600/?random");',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
  label: 'Reviews',
  link: '#reviews'
},
{
  label: 'Delivery',
  link: '#delivery'
}];

//1st Method

//   const siteNav = document.querySelector('nav');
//   const navList = siteNav.querySelector('ul');
//   siteNav.appendChild(navList);

//     const markup = `
//     <ul>
//       ${navItems.map( navItem => `<li><a href="${navItem.link}">${navItem.label}</a></li>` ).join('')}
//     </ul>
//     `;

//     navList.innerHTML = markup;

//   const NavLinks = navList.querySelectorAll('li');

//   function activeNavLink(){
//   for (let i=0; i < NavLinks.length; i++){
//         NavLinks[i].classList.remove('active');
//       }
//       this.classList.add('active');
//     }

//   for (let l = 0; l < NavLinks.length; l++){
//     NavLinks[l].addEventListener('click', activeNavLink);
//   }

  

// //Nav Sticky
//   let topOfNav = siteNav.offsetTop;

//   function fixNav() {
//     if(window.scrollY >= topOfNav) {
//       document.body.style.paddingTop = siteNav.offsetHeight + 'px';
//       document.body.classList.add('fixed-nav');
//     } else {
//       document.body.classList.remove('fixed-nav');
//       document.body.style.paddingTop = 0;
//     }
//   }

//   window.addEventListener('scroll', fixNav);


//2nd Method

const siteNav = document.querySelector('nav ul');
  // const navList = siteNav.querySelector('ul');
  // siteNav.appendChild(navList);

    const markup = `
    <ul>
      ${navItems.map( navItem => `<li><a href="${navItem.link}">${navItem.label}</a></li>` ).join('')}
    </ul>
    `;

    siteNav.innerHTML = markup;


  const navLinks = siteNav.querySelectorAll('a');
  const navListLinks =siteNav.querySelectorAll('li');
  for (let i=0; i < navLinks.length; i++){
        navLinks[i].addEventListener('click', function(){
          removeClass();
          this.parentNode.classList.add('active');
        });
    }
    function removeClass() { 
      for (let i = 0; i < navListLinks.length; i++){
        navListLinks[i].classList.remove('active');
  }
}  

  

//Nav Sticky
  let topOfNav = siteNav.offsetTop;

  function fixNav() {
    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop = siteNav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }

  window.addEventListener('scroll', fixNav);







