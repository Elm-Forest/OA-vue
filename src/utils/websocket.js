import ElementUI from 'element-ui';
import {requestUrl} from './back-end.js';

function initWebSocket() {
    const wsUrl = 'ws://' + requestUrl + "/websocket";
    this.socket = new WebSocket(wsUrl, [localStorage.getItem('token')])
    this.socket.onopen = function () {
        ElementUI.Notification({
            title: '来自websocket服务日志',
            message: '成功与服务器建立websocket连接',
            type: 'success',
            duration: 3000,
        });
    }
    this.socket.onerror = webSocketOnError;
    this.socket.onclose = closeWebsocket;
    return this.socket;
}

function webSocketOnError(e) {
    console.log('websocket error:', e)
    ElementUI.Notification({
        title: '来自websocket服务日志',
        message: "无法建立websocket连接，日志见控制台",
        type: 'error',
        duration: 0,
    });
}

function webSocketOnMessage(e) {
    console.log(e)
    ElementUI.Notification({
        title: '',
        message: e.data,
        type: 'success',
        duration: 3000,
    });
}

function closeWebsocket() {
    console.log('连接已关闭...')
}

function close() {
    this.socket.close() // 关闭 websocket
    this.socket.onclose = function (e) {
        console.log(e)//监听关闭事件
        console.log('关闭')
    }
}

function webSocketSend(agentData) {
    this.socket.send(agentData);
}

export default {
    initWebSocket, close
}
