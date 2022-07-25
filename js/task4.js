// todo Нотатки

/*
 * Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка -  це об'єкт із властивостями text та priority. Додай в класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}

 * Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
 */

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items) {
    this.items = items ?? [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const element = this.findElement(text);

    if (!element) return;

    this.items = this.items.filter(item => item.text !== text);
  }

  updatePriority(text, newPriority) {
    const element = this.findElement(text);

    element.priority = newPriority;
  }

  findElement(element) {
    return this.items.find(item => item.text === element);
  }
}

const myNotes = new Notes();

myNotes.addNote({ text: 'Моя перша нотатка', priority: Notes.Priority.LOW });

myNotes.addNote({
  text: 'Моя друга нотатка',
  priority: Notes.Priority.NORMAL,
});

myNotes.removeNote('Моя третя нотатка');
myNotes.updatePriority('Моя друга нотатка', Notes.Priority.HIGH);

console.table(myNotes.items);
