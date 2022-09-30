import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private router: Router) {}

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

    this.router.navigateByUrl('/main/tabs/community');
  }

  getPosts() {}

  getPost(id) {
    return { ...this.posts.find((item) => item.id === id) };
  }
}
