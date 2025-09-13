import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from './component/task-form/task-form';

@Component({
    selector: 'app-root',
    imports: [TaskForm],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
