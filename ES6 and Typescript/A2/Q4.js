var chatroomUserData = [];
var chatroomUserMessages = [];
var nameMessageList1 = [];
var nameMessageList2 = [];
function addUser(name, message, id) {
    var object = { nameEntered: name,
        messageEntered: message
    };
    if (id == 1) {
        nameMessageList1.push(object);
        console.log('Info added to chatRoom-1');
    }
    else {
        nameMessageList2.push(object);
        console.log('Info added to chatRoom-2');
    }
}
function showDetails(id) {
    console.log(nameMessageList1);
}
function doWork() {
    name = 'Tony',
        message = 'Hey there!';
    id = 1;
    addUser(name, message, id);
    showDetails(id);
}
doWork();