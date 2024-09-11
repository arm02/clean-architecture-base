import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableDisplayedColumn } from 'src/app/core/domain/entities/table.entity';

@Component({
  selector: 'app-table-simple',
  templateUrl: './table-simple.component.html',
  styleUrls: ['./table-simple.component.scss'],
})
export class TableSimpleComponent {
  @Input() datasource: any = [];
  @Input() displayColumn: TableDisplayedColumn[] = [];
  @Output() actionEvent = new EventEmitter<string | number>();

  actionClick(params: string | number) {
    this.actionEvent.emit(params);
  }
}
