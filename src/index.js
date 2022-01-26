import './scss/index.scss';
import 'bootstrap';

// or get all of the named exports for further usage
import * as bootstrap from 'bootstrap';
import { BoardComponent } from './modules/board.component';
var myCarousel = document.querySelector('#carouselExampleInterval')
var carousel = new bootstrap.Carousel(myCarousel)

const board = new BoardComponent();