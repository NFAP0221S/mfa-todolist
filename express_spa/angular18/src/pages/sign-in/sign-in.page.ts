import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';


@Component({
  selector: 'fs-sign-in',
  templateUrl: './sign-in.page.html',
//   styleUrls: ['./tasks-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage {
//   loadTasks$ = this.taskFacade.filteredTasks$.pipe(
//     filter((tasks) => tasks.length == 0),
//     tap(() => {
//       this.taskFacade.loadTasks();
//     })
//   );

//   constructor(
//     // public readonly taskFacade: TaskFacade,
//     public readonly router: Router
//   ) {}

//   trackByTaskId(id: number, task: Task) {
//     return task.id;
//   }
}