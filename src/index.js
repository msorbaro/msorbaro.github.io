import $ from 'jquery';
import './style.scss';

let num = 0;

const update = () => {
  num += 1;
  $('#main').html(num);
};

setInterval(update, 1000);
