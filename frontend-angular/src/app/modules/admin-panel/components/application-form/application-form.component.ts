import { JsonPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Application } from '../../../../core/interfaces/applications.interface';

@Component({
  selector: 'application-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent implements OnInit {
  @Input() application!: Application;

  fb = inject(FormBuilder);
  activeModal = inject(NgbActiveModal);

  salesAgentForm: FormGroup = this.fb.group({
    id: [''],
    business_application_id: ['', Validators.required],
    sales_agent_first_name: ['', Validators.required],
    sales_agent_last_name: ['', Validators.required],
    sales_agent_email: ['', [Validators.required, Validators.email]],
    account_type: ['', Validators.required],
    created_at: [''],
    application_status: [''],
    business_category: [''],
    updated_at: [''],
  });

  ngOnInit(): void {
    if (!this.application) {
      return;
    }

    this.salesAgentForm.patchValue(this.application);
  }

  saveApplication(): void {
    if (this.salesAgentForm.invalid) {
      return;
    }

    this.activeModal.close(this.salesAgentForm.value);
  }
}
