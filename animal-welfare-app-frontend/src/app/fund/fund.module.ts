import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRoutingModule } from './fund-routing.module';
import { FundComponent } from './fund.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FundComponent],
    imports: [
        CommonModule,
        FundRoutingModule,
        ReactiveFormsModule
    ]
})
export class FundModule { }
