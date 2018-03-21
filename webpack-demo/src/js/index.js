/**
 * Created by cdn on 2018/3/21.
 */
import _ from 'lodash';
import '../css/style.css';
import Img from '../img/img1.jpg'
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'click';
    btn.onclick = printMe();

    var imgg = new Image();
    imgg.src = Img;
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.appendChild(imgg);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());