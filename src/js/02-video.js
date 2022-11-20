import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

player.on(
  'timeupdate',
  throttle(event => {

    console.log(event);
    
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

player.setCurrentTime(+localStorage.getItem('videoplayer-current-time'));