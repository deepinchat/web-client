import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserProfile } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { FileModel } from '../../../../core/models/file.model';
import { UserAvatar } from "../avatar/avatar";
import { FileUploaderComponent } from "../../file-uploader/file-uploader.component";
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { O } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';

@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    UserAvatar,
    FileUploaderComponent,
    MatListModule
  ]
})
export class ProfileEditor implements OnInit {
  form?: FormGroup;
  isLoading = true;
  profile?: UserProfile;
  timeZones: { name: string, value: string }[] = [
    { name: 'Asia/Shanghai', value: 'Asia/Shanghai' },
    { name: 'Asia/Tokyo', value: 'Asia/Tokyo' },
    { name: 'America/New_York', value: 'America/New_York' },
    { name: 'Europe/London', value: 'Europe/London' },
    { name: 'Europe/Berlin', value: 'Europe/Berlin' },
    { name: 'America/Los_Angeles', value: 'America/Los_Angeles' },
    { name: 'Australia/Sydney', value: 'Australia/Sydney' },
    { name: 'UTC', value: 'UTC' }
  ];
  locales: { name: string, value: string }[] = [
    { name: 'Chinese (Simplified)', value: 'zh-CN' },
    { name: 'Chinese (Traditional)', value: 'zh-TW' },
    { name: 'English (United States)', value: 'en-US' },
    { name: 'English (United Kingdom)', value: 'en-GB' },
    { name: 'French (France)', value: 'fr-FR' },
    { name: 'German (Germany)', value: 'de-DE' },
    { name: 'Japanese', value: 'ja-JP' },
    { name: 'Korean', value: 'ko-KR' },
    { name: 'Portuguese (Brazil)', value: 'pt-BR' },
    { name: 'Spanish (Spain)', value: 'es-ES' },
    { name: 'Russian', value: 'ru-RU' },
  ];
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.buildForm(profile);
      },
      error: (error) => {
        console.error('Error loading user profile:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private buildForm(profile: UserProfile) {
    this.form = this.fb.group({
      name: this.fb.control(profile.name || '', []),
      firstName: this.fb.control(profile.firstName || '', []),
      lastName: this.fb.control(profile.lastName || '', []),
      bio: this.fb.control(profile.bio || '', []),
      locale: this.fb.control(profile.locale || '', []),
      location: this.fb.control(profile.location || '', []),
      zoneInfo: this.fb.control(profile.zoneInfo || '', []),
      birthDate: this.fb.control(profile.birthDate || '', []),
      pictureId: this.fb.control(profile.pictureId || '', []),
      company: this.fb.control(profile.company || '', []),
    });
  }

  onAvatarUploaded(files: FileModel[]) {
    const file = files[0];
    if (!file) {
      console.error('No file uploaded');
      return;
    }

    console.log('Avatar uploaded:', file);
    if (this.profile) {
      this.profile.pictureId = file.id;
    }
    this.form?.get('pictureId')?.setValue(file.id);
  }

  formControlErrors(name: string) {
    return this.form?.get(name)?.errors;
  }

  onSubmit() {
    return new Promise<void>((resolve, reject) => {
      if (!this.form || this.form.invalid) {
        reject('Form is invalid');
        return;
      }
      this.isLoading = true;
      const profileData: UserProfile = {
        ...this.profile,
        ...this.form.value
      };
      const request = this.form.value;
      this.userService.updateProfile(profileData).subscribe({
        next: (profile) => {
          console.log('Profile updated successfully:', profile);
        },
        error: (error) => {
          console.error('Error updating profile:', error);
          reject(error);
        },
        complete: () => {
          this.isLoading = false;
          resolve();
        }
      });
    });
  }
}
