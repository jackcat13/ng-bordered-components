# BorderedButton

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Demo

[Bordered button demo/code here](https://stackblitz.com/edit/angular-ivy-hdrtgv?file=src/app/app.component.html)

## Install

To install in an Angular project:

```sh
npm install jackcat13-ng-bordered-button
```

And import the module in app.module.ts:

```typescript
import { BorderedButtonModule } from 'jackcat13-ng-bordered-button';

@NgModule({
  imports: [BorderedButtonModule]
)}
```

## Usage

In any html file, use the following tag:

```html
<lib-bordered-button title="Any title" backgroundColor="#ee8700" color="white"></lib-bordered-button>
```

### Options

In <lib-bordered-button> tag, it is possible to configure the following attributes (all are optional):

- title="Any title"
  - Configures the text inside the button
- background-color="#ee8700"
  - Configures the background color of the button when hovered
- color="white"
  - Configures the color of the text inside the button when hovered

## Rendered example

- normal
![button1Example](https://user-images.githubusercontent.com/9136720/131695182-96857a94-49d5-41d3-82e6-81ac14f378fc.png)
- hover
![button2Example](https://user-images.githubusercontent.com/9136720/131695261-d97e4eff-d300-493a-859c-2fc331b351b9.png)