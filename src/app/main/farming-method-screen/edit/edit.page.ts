import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from '../add/add.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  title: string;
  message: string;
  id: number;
  constructor(
    private addService: AddService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('editId');
      const { title, message } = this.addService.getOneMethod(this.id)[0];
      this.title = title;
      this.message = message;
    });
  }

  cancel() {
    this.router.navigateByUrl('/main/tabs/farming-method/add');
  }
  confirm() {
    this.addService.updateMethod(this.id, this.title, this.message);
    this.router.navigateByUrl('/main/tabs/farming-method/add');
  }
}
