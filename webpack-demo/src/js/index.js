/**
 * Created by cdn on 2018/3/21.
 */
import _ from 'lodash';
import '../css/style.css';
import Img from '../img/img1.jpg'

function component() {
    var element = document.createElement('div');

    var imgg = new Image();
    imgg.src = Img;

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.appendChild(imgg);

    return element;
}

document.body.appendChild(component());