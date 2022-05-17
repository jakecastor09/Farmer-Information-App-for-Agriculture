import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  currentTitle = '';
  currentMessage = '';
  currentImg = '';
  post;
  posts;
  title;
  message;
  image;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getPosts();
  }

  onClickBtn() {
    const data = {
      type: this.title,
      message: this.message,
      img: this.image,
    };

    this.apiService.updatePost(this.post.id, data).subscribe((res: any) => {
      console.log('Success', res);
    });

    this.router.navigateByUrl('/main/tabs/community');
  }

  getPosts() {
    this.apiService.getPosts().subscribe(
      (res: any) => {
        this.posts = res;
        this.route.paramMap.subscribe((paramMap) => {
          if (paramMap.get('editId')) {
            this.post = this.getPost(paramMap.get('editId'));
            this.currentTitle = this.post.type;
            this.currentMessage = this.post.message;
            this.currentImg = this.post.img;
          }
        });
        console.log('SUCCESS ===', res);
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }

  getPost(id) {
    return { ...this.posts.find((item) => item.id === id) };
  }
}
