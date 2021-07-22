import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GuestService } from '../../../core/http/guest.service';
import { ChipFilterComponent } from '../chip-filter/chip-filter.component';

@Component({
  selector: 'app-table-guest',
  templateUrl: './table-guest.component.html',
  styleUrls: ['./table-guest.component.scss']
})
export class TableGuestComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild("chipFilter") chipFilter: ChipFilterComponent | any;

  displayedColumns: string[] = ['name', 'familyName', 'status', 'confirmDate'];
  dataSource: MatTableDataSource<any>;
  searchText: string;
  useFilters: boolean;
  load: boolean;

  constructor(private guestService: GuestService) {
    this.dataSource = new MatTableDataSource<any>();
    this.searchText = '';
    this.useFilters = false;
    this.load = false;
  }

  ngOnInit() {
    this.findAllGuest();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectFilter(query: string): void {
    this.useFilters = query !== '/?status=&family=';
    this.findAllGuest(query);
  }

  applyFilter(inputText: string): void {
    this.dataSource.filter = inputText.trim().toLowerCase();
    this.searchText = inputText;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStatusName(status: number): string {
    switch (status) {
      case 0: return 'No enviada';
      case 1: return 'No confirmado';
      case 2: return 'Aceptado';
      case 3: return 'Rechazado';
      default: return 'nada';
    }
  }

  private findAllGuest(query?: string) {
    this.dataSource.data = [];
    this.load = true;

    if (this.chipFilter) {
      this.chipFilter.setDisabled(true);
    }

    this.guestService.findAllGuest(query).subscribe((resp: any) => {
      this.dataSource.data = resp.data;
      this.chipFilter.setDisabled(false);
      this.load = false;
    });
  }

}
