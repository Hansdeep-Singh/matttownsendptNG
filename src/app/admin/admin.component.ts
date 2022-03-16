import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EngineService } from '../engine/engine.service';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiserviceService,
    private engineService: EngineService
  ) {}

  ngOnInit(): void {}

  uploadVideos = this.fb.group({
    videosXls: ['', Validators.required],
  });

  message: any | undefined;
  file: File | undefined;

  onFileSelected(event: any) {
    let af = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ];
    if (event.target.files.length > 0) {
      this.file = <File>event.target.files[0];
      console.log(this.file);
    }
  }

  submit(post: any) {
    const fd = new FormData();
    fd.append('file',this.file!,this.file!.name)
    this.apiService.post(fd, 'Admin', 'UploadVideos').subscribe((data) => {
      this.message = { success: data.success, notifymessage: data.message };
      this.engineService.changeNotifyMessage(this.message);
    });
  }
}
