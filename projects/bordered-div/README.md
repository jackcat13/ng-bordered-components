# BorderedDiv

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Demo

[Bordered div demo/code here](https://stackblitz.com/edit/angular-ivy-qlf7cm?file=src/app/app.component.html)

## Install

To install in an Angular project:

```sh
npm install jackcat13-ng-bordered-div
```

And import the module in app.module.ts:

```typescript
import { BorderedDivModule } from 'jackcat13-ng-bordered-div';

@NgModule({
  imports: [BorderedTitleDiv]
)}
```

## Usage

In any html file, use the following tags:

```html
<lib-bordered-div>
    <div>line 1</div>
    <div>line 2</div>
    <div>line 3</div>
    <div>line 4</div>
</lib-bordered-div>
```

### Options

No option available. But note that the first element inside <lib-bordered-div> tag will be rendered as a "title" of the div as you can see in the below example. Also, the color of the wrapper div of the bordered-div will impact the bordered-div color because it is inherited.

## Rendered example

![divExample](https://user-images.githubusercontent.com/9136720/131695825-391461d8-8a5a-4d0e-a092-696cd8c50618.png)

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
