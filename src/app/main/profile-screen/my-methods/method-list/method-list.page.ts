import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmingMethodService } from 'src/app/main/farming-method-screen/farming-method.service';
import { MainService } from 'src/app/main/main.service';
import { User } from 'src/app/main/user.model';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.page.html',
  styleUrls: ['./method-list.page.scss'],
})
export class MethodListPage implements OnInit {
  name;
  user: User;
  allSelectedMethod = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private mainService: MainService,
    private farmingMethodService: FarmingMethodService,
    private router: Router,
    private location: Location
  ) {
    this.activeRoute.params.subscribe((paramMap) => {
      this.name = paramMap.name;
    });
  }

  ngOnInit() {
    this.user = this.mainService.getUser();
    this.farmingMethodService.getAllUserFarmingMethod().subscribe((data) => {
      this.allSelectedMethod = data.filter((farmingMethod) => {
        if (
          farmingMethod.userId === this.user.userId &&
          farmingMethod.name.toLowerCase() === this.name.toLowerCase()
        ) {
          return farmingMethod;
        }
      });
      console.log(this.allSelectedMethod);
    });
  }
  onClickFarmingMethodHandler(farmingMethodId: string) {
    this.router.navigateByUrl(
      '/main/tabs/farming-method/method-details/' + farmingMethodId
    );
  }
  backBtn() {
    this.location.back();
  }
}
