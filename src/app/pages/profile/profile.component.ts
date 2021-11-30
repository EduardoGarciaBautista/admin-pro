import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UploadFileService} from "../../services/upload-file.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public image: File | null = null;
  public tempImage: any;

  constructor(public uService: UserService,
              private fb: FormBuilder,
              private uploadService: UploadFileService) {
    this.profileForm = this.fb.group({
      name: [this.uService.getUser?.name, Validators.required],
      email: [this.uService.getUser?.email, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  updateProfile(): void {
    this.uService.updateProfile(this.profileForm.value).subscribe(result => {
      Swal.fire('Success', 'Changes has been saved', 'success');
    }, (e) => {
      Swal.fire('Error', e.error.msg, 'error');
    })
  }

  updateImage(e: any): void {
    const [file] = e.target.files;
    if (!file) {
      this.tempImage = null;
      return;
    }
    this.image = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.tempImage = reader.result;
    };
  }

  uploadFile() {
    if (this.image && this.uService.getUser?.uid) {
      this.uploadService.updateImage(this.image, 'users', this.uService.getUser?.uid).then(r => {
        if (typeof r === 'string') {
          this.uService.setUser = {...this.uService.user, img: r};
          Swal.fire('Success', 'Changes has been saved', 'success');
        }
      });
    }
  }
}
