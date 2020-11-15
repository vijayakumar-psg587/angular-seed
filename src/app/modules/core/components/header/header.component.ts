import { Component, OnInit } from '@angular/core';
import { StaticService } from 'src/app/modules/shared/services/static.service';
import {TestDataModel} from "../../../shared/models/test-data.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerTitle: string;

  constructor(private staticService: StaticService) {}

  async ngOnInit(): Promise<void> {
    const testDataModel: TestDataModel = await this.staticService.getTestHeaderConfig();
    this.headerTitle = testDataModel.headerTitle;
  }

  get showAccount(): boolean {
    return this.staticService.showAccountFlag();
  }
}
