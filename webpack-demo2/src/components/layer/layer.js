//import tpl from './layer.html';   //此处tpl返回的是字符串
import tpl from './layer.tpl';  //此处tpl返回的是函数
import './layer.less';

function layer() {
    return {
        name: 'layer',
        tpl: tpl
    };
}

export default layer;