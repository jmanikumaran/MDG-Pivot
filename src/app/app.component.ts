import { Component, OnInit, ViewChild } from '@angular/core';
import { SampleService } from './Services/sample.service';
import { MDGComponent } from 'mdg-pivot';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    data: any = [];
    format: any = {
        'name': 'Sample Report',
        'reportType': 'grid',
        'title': 'Sample Report',
        'showOptions': true,
        'showFilter': true,
        'showFormat': true,
        'showSave': true,
        'showExport': true,
        'showPrint': true,
        'lineChart': true,
        'barChart': true,
        'doughnutChart': true,
        'pieChart': true,
        'polarAreaChart': true,
        'radarChart': true,
        'rows': [{
            'colName': 'Category',
            'displayName': 'Category',
            'colOrder': 1,
            'dataType': 'string',
            'headerAlign': 'left',
            'textAlign': 'left',
            'valueField': false,
            'formula': '',
            'fields': []
        }],
        'columns': [{
            'colName': 'Location',
            'displayName': 'Location',
            'colOrder': 1,
            'dataType': 'string',
            'headerAlign': 'left',
            'textAlign': 'left',
            'valueField': false,
            'formula': '',
            'fields': []
        }],
        'values': [{
            'column': {
                'colName': 'Value',
                'displayName': 'Value',
                'colOrder': 1,
                'dataType': 'number',
                'headerAlign': 'left',
                'textAlign': 'left',
                'valueField': false,
                'formula': '',
                'fields': []
            },
            'aggregation': {
                'Name': 'Sum',
                'Symbol': '&Sigma;',
                'funcName': 'sum'
            }
        }],
        'filters': [],
        'filtervalues': [{
            'col': 'Location',
            'dataType': 'string',
            'filter': [],
            'sort': ''
        }, {
            'col': 'Category',
            'dataType': 'string',
            'filter': [],
            'sort': ''
        }]
    };
    @ViewChild('pivot') pivot: MDGComponent;
    constructor(private sampleService: SampleService) {
        this.sampleService.getSamples().subscribe(result => {
            this.data = result;
            this.pivot.refreshData(this.data);
        });
    }
}
