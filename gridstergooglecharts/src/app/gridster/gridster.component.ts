import { Component, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.css']
})
export class GridsterComponent implements OnInit {

  dashboard: Array<GridsterItem>;
  dashboardOriginal: Array<GridsterItem>;
  options: GridsterConfig;
  
  

  constructor() { }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.info('eventStop', item, itemComponent, event);
  }

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.info('eventStart', item, itemComponent, event);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true, // enable/disable resizable items	
        handles: { s: true, e: true, n: true, w: true, se: true, ne: true, sw: true, nw: true }, // resizable edges of an item	
        start: GridsterComponent.eventStart, // callback when resizing an item starts	
        stop: GridsterComponent.eventStop,   // callback when resizing an item stops	
      },
      swap: false,  // allow items to switch position if drop on top of another	
      swapWhileDragging: false, // swap items while dragging and save new position	
      pushItems: true,  // push items when resizing and dragging
      disablePushOnDrag: false, // disable push on drag	
      disablePushOnResize: false, // disable push on resize	 
      pushDirections: { north: true, east: true, south: true, west: true }, // control the directions items are pushed	
      pushResizeItems: false, // on resize of item will shrink adjacent items	
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false, // disable the window on resize listener. This will stop grid to recalculate on window resize.	
      disableWarnings: false, // disable console log warnings about misplacement of grid items	
      scrollToNewItems: false
    };

    this.dashboard = [
      {
        cols: 2,
        rows: 1,
        y: 0,
        x: 0,
        id: 1,
        dataOfCharts: {
          title: 'India',
          type: 'PieChart',
          columnNames: ['Browser', 'Percentage'],
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            ['Chrome', 12.8],
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ],
          options: {
            is3D: false,
            pieHole: 0.4,
          }
        }
      },
      {
        cols: 2, rows: 2, y: 0, x: 2, id: 2,
        dataOfCharts: {
          title: 'USA',
          type: 'BarChart',
          columnNames: ['Year', 'Asia','Europe'],
          data: [
            ["2012", 900, 390],
            ["2013", 1000, 400],
            ["2014", 1170, 440],
            ["2015", 1250, 480],
            ["2016", 1530, 540]
          ],
          options: {
            hAxis: {
              title: 'Year'
           },
           vAxis:{
              minValue:0
           } 
          }
        }
      },
      {
        cols: 2, rows: 2, y: 2, x: 2, id: 3,
        dataOfCharts: {
          title: 'UK',
          type: 'PieChart',
          columnNames: ['Browser', 'Percentage'],
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            ['Chrome', 12.8],
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ],
          options: {
            is3D: false,
            pieHole: 0.4,
          }
        }
      }
    ];
    this.dashboardOriginal = this.dashboard.map(x => ({ ...x }));
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  reset(): void {
    this.dashboard = this.dashboardOriginal.map(x => ({ ...x }));
  }

  trackBy(index: number, item: GridsterItem): number {
    return item.id;
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }


}
