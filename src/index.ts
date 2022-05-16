import generateMessage from './utils/utils';
import './styles/styles.scss';
import codingImg from './assets/coding-picture.png';

console.log(generateMessage());

const imgEl: HTMLElement | null = document.getElementById('coding-img');
if (imgEl) (imgEl as HTMLImageElement).src = codingImg;
