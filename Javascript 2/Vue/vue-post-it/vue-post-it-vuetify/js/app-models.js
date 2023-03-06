const STATUS = {POSTED: '', ARCHIVED: 'archive', TRASHED: 'trash'};

function Note(title, text, color) {
    this.id = Note.nextNoteId++;
    this.title = title || '';
    this.text = text || '';
    this.color = color || 'yellow';
    this.editing = false;
    this.status = STATUS.POSTED;

    this.archived = function(){
        return this.status === STATUS.ARCHIVED;
    };

    this.trashed = function(){
        return this.status === STATUS.TRASHED;
    };
}

Note.nextNoteId = 1;

// Class alternative
// class Note{
//     static nextNoteId = 0;
//
//     constructor(title, text, color) {
//         this.id = Note.nextNoteId++;
//         this.title = title || '';
//         this.text = text || '';
//         this.color = color || 'yellow';
//         this.editing = false;
//         this.status = STATUS.POSTED;
//     }
//
//     archived(){
//         return this.status === STATUS.ARCHIVED;
//     };
//
//     trashed(){
//         return this.status === STATUS.TRASHED;
//     };
// }
