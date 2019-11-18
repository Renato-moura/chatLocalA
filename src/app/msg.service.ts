export class MsgService{
    msg = [
    {
    id: '1',
    name: 'Firebase',
    content: 'Que tal programar Serverless?'
    }
    ]

    removeNote (note){
        let index = this.msg.indexOf (note);
        if (index > -1){
        this.msg.splice(index, 1);
        }
     }
    addNote (note){
        this.msg.push(note);
        }
 }