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

# Legal stuff

MIT License

Copyright (c) 2021 jackcat13

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
