const changeTheme = document.querySelector('#themeSwitcher');

navigator.geolocation.getCurrentPosition((position) => {
  //console.log(position)
  let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
  let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);

  if (isDay(sunset,sunrise)) {

      setTheme('light-theme');
  } else {

     setTheme('dark-theme');
  }




  function isDay(sunset, sunrise) {

    const nowHours = new Date().getHours();
    console.log(nowHours);
    return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
  }

});


const defaultTheme = localStorage.getItem('theme') || 'light-theme' ;

setTheme(defaultTheme);

changeTheme.addEventListener('change', (e) => {

  setTheme(e.target.value);

} );

function setTheme(theme) {
 theme = theme || 'light-theme' ;
  document.documentElement.className = theme;

  localStorage.setItem('theme',theme);
  changeTheme.value = theme;

}
