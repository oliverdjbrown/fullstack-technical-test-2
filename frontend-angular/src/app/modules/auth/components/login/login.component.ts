import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../../../interfaces/user.interface';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);

  signInForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
    localStorage.removeItem('user');
  }

  signIn(): void {
    if (this.signInForm.invalid) {
      return;
    }

    this.authService.singIn(this.signInForm.value).subscribe((user: User) => {
      this.authService.saveDataToLocalStorage(user);

      this.notificationService.showSuccess('Logged in', 'Success');

      this.authService.navToPanel();
    });
  }
}
