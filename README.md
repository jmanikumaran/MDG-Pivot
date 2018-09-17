# MDG Pivot [![npm version](https://badge.fury.io/js/mdg-pivot.svg)](http://badge.fury.io/js/mdg-pivot) [![npm downloads](https://img.shields.io/npm/dm/mdg-pivot.svg)](https://npmjs.org/mdg-pivot) 

This package is used to draw pivot table using JSON input data.
<!-- 
[![NPM](https://nodei.co/npm/mdg-pivot.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/mdg-pivot)
[![NPM](https://nodei.co/npm-dl/mdg-pivot.png?height=3&months=9)](https://npmjs.org/mdg-pivot) -->

# Instructions

### Prerequisites

This package is depend on the following npm packages.

Install `ng2-charts` from `npm`:
```bash
npm install ng2-charts --save
```
Install `chart.js` from `npm`:
```bash
npm install chart.js --save
```
Install `ng2-dnd` from `npm`:
```bash
npm install ng2-dnd --save
```
Install `pdfmake` from `npm`:
```bash
npm install pdfmake --save
```
Install `primeng` from `npm`:
```bash
npm install primeng --save
```
### Installation

You can install ***mdg-pivot*** using `npm`

```bash
npm install mdg-pivot --save
```

## Usage

### Import
```typescript
import { MDGModule } from 'mdg-pivot';

// In your App's module:
imports: [
   MDGModule
]
```
```typescript
// In your component template:
<mdg-pivot [data]='data' (savePivot)='onSavePivot($event)' (error)='onError($event)' [autoConfigurePivot]='false'></mdg-pivot>
```
### Style
Add basic style to the pivot by using the below line.

```typescript
// In your styles.css:
@import "../node_modules/mdg-pivot/styles.css";
```
### Pivot Formats
This package contains the following type of formats.
List of Formats :
* Grid
* Line Chart
* Bar Chart
* Doughnut Chart
* Radar Chart
* Pie Chart
* Polar Area Chart

### Toolbar Options

- `Options` : Configures pivot columns, rows and values.
    * Drag and Drop from list of available fields.
    * Value field formula type can be change by clicking on the *`fx`* icon available on the right end of each field.
    * Fields can be rearranged by selecting anyone field and using up and down arrows to change the order.
    * Fields can be removed by drag back to list of fields *or* by deselecting the check box available in the list of fields.
- `Add Formula Field` : add dynamic formula to the report.
    * Dynamic formula field will be added to list of fields with different category.
    * Formulas can be used to calculate this field data.
- `Filter` : Configures additional filter fields to the report. This will be available on top of the report.
- `Format` : Configures the alignment of each selected field.
- `Grid` : Mouse over will display the list of available pivot formats. By clicking on any format, report will be displayed in the selected format.
- `Export` : Mouse over will display the export formats and save option. based on the action performed, the report will be exported.
- `Fullscreen` : Report can be viewed in full screen mode.
### Properties

- `data` ( `Array<any[]>` ) : input JSON object.;
- `autoConfigurePivot` ( `?boolean=true` ) : This is automatically select columns, rows and values based on the data type of the property.
- `pivotFormat` ( `?any` ) : This will format the report based on this configuration (JSON Object).
- `isLoading` ( `?boolean=false` ) : can show loading indication if there is an api call required.

### Methods

- `refreshData` ( `Array<any[]>` ) : refresh/change the data of the report.

### Events

- `savePivot` : fires when click on save, returns information regarding the current configuration in JSON Object format.
- `error` : fires when error occurred, returns error message. if this is not subscribed, alert message will be displayed.

## Authors

* **Manikumaran Jaganathan** - *Owner* 

## License

* This project is licensed under the **MIT License**
