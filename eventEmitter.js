/**
 * @author Alizeegod
 * @Date 2021-04-13 17:01:52
 * @Description
 *
 * */

class EventEmitter {
    constructor() {
        this.events = [];
    }

    on (eventName, eventHandler) {
        if (!this.events.some(item => item.name == eventName)) {
            this.events.push({
                eventName,
                eventHandler
            })
        }
    }

    emit (eventName, ...params) {
        let event = this.events.find(item => item.eventName == eventName);

        if (event) {
            event.eventHandler(...params)
        }
    }

    off (eventName) {
        let index = this.events.findIndex(item => item.eventName == eventName);
        if (index > -1) {
            this.events.splice(index, 1)
        }
    }
}

let emitter = new EventEmitter();

emitter.on('say', function(msg) {
    console.log(msg)
})
let num = 0;
setInterval(() => {
    emitter.emit('say', num++)
}, 2000)
