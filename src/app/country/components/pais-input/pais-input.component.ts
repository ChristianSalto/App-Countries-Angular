import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // Evento que se emitira un tiempo despues de de que dejemos de predionar la tecla

  @Input() placeholder: string = "";
  @Input() name: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  handleSubmit() {
    this.onEnter.emit(this.termino);
  }

  handleKeyPressed(event: any) {
    this.debouncer.next(this.termino);
  }
}
