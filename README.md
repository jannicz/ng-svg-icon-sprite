# SVG icon sprite package for Angular 4+

This [npm module](https://www.npmjs.com/package/ng-svg-icon-sprite) in Angular package format provides both
a solution for generating sprites and a component for including them.

<a href="https://jannicz.github.io/ng-svg-icon-sprite/">
  <strong>See ng-svg-icon-sprite demo</strong>
</a>

<p>
  <img src="svg-icon-sprite-example.png" width="450" alt=""/>
</p>

## Installation

```
npm install ng-svg-icon-sprite --save
```

After installing the package you can import it into any application’s app.module.ts by simply including it in its
`@NgModule` imports array:

```javascript
import { SvgIconSpriteModule } from 'ng-svg-icon-sprite'; // <-- here

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SvgIconSpriteModule // <-- here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

To use your SVGs as a sprite you need to do 2 things:

1. Generate the SVG sprite using the provided script
2. Make use of the `svg-icon-sprite` component with the proper path and name of the sprite file and icon

### 1. Generate the sprite

Each time you add a new icon, you will have to run the script that generates the sprite. Therefore you should add it as
a npm script to your package.json:

```javascript
"scripts": {
  "create-icon-sprite": "svg-symbols ./src/assets/icons > ./src/assets/sprites/sprite.svg"
}
```

and run it

```
npm run create-icon-sprite
```

__Note: you need to create an empty sprites folder before running the npm script__

The [used library](https://www.npmjs.com/package/svg-symbols) for the sprite generation is already included as a
dependency here, so you do not need to install it (just include the script like shown above).

By default the script will take all svg icons from `src/app/assets/icons` and create a sprite into the
`src/app/assets/sprites` folder using the [svg symbols technique](https://css-tricks.com/svg-symbol-good-choice-icons/).

```
app
└── assets
    └── icons (svg icon source)
        └── icon-1.svg
        └── icon-2.svg
    └── sprites (sprite destination folder)
        └── sprite.svg
```

### 2. Use the component

Now you can include icons by using the `svg-icon-sprite` component directive:

```html
<svg-icon-sprite
  [src]="'assets/sprites/sprite.svg#cart'"
  [width]="'22px'"
  [classes]="'my-icon-class'"
></svg-icon-sprite>

<!-- or with a dynamic icon name -->

<svg-icon-sprite
  [src]="'assets/sprites/sprite.svg#' + iconName"
  [width]="'50%'"
></svg-icon-sprite>
```

## Options

- `src` - icon source name, the syntax is `path/file#icon` where `path` is relative to app folder, `file` is
the name of the sprite and `icon` is the filename of the svg icon.
- `width` *optional* - width of the svg in any length unit, i.e. `32px`, `50%`, `auto` etc., default is `100%`
- `height` *optional* - the height of the svg in any length unit, if undefined height will equal the width
- `classes` *optional* - class name for this icon, default is `icon`
- `viewBox` *optional* - define lengths and coordinates in order to scale to fit the total space available (to be used if the viewBox of the SVG is missing)
- `preserveAspectRatio` *optional* - manipulate the aspect ratio, only in combination with `viewBox` (see SVG standard for details)

## Styling

Just add a CSS color property to the host component (the component invoking the svg-icon-sprite). The SVG component uses
the `currentColor` value to [pass the ancestor's color](https://css-tricks.com/cascading-svg-fill-color) through to the SVG shapes:

```css
/* parent component styles */
color: red;
```

## Advanced Configuration

### Assets folder

If you have another folder structure than above, you can pass both your input and output path using the npm script:

```
svg-symbols sourcefolder > destination/filename.svg
```

Of course you can use any other "svg to symbol" library - the `ng-svg-icon-sprite` module is agnostic regarding the
technology behind the sprite generation.

### Custom Styling

To access inner SVG properties like `fill` or `stroke`, you need to use Angular's ::ng-deep (former `/deep/`) selector in
the parent component and select the `use` tag inside the SVG:

```css
/* parent component style */
::ng-deep svg.icon use {
  fill: orange;
}
```

or to access properties like height or width at the root of the svg:

```css
/* parent component style */
::ng-deep svg.icon {
  height: 85px;
  width: 85px;
}
```

### Scaling and Sizing

If your SVG does not scale like expected (i.e. it is cropped or larger than desired) it might be lacking a `viewBox`.
You need to set the `viewBox` property manually to match the size of the exported shape. A combination of the correct
`viewBox` and width is required. Add the `viewBox` property and decrease/increase the last 2 values until you have it right:

```html
<!-- i.e. lower '0 0 80 80' to '0 0 40 40' to scale down -->
<svg-icon-sprite
  [src]="'assets/sprites/sprite.svg#star'"
  [width]="'40px'"
  [viewBox]="'0 0 80 80'"
></svg-icon-sprite>
```

Still having trouble with scaling or sizing? Try to clean your SVG icons before processing them into sprites by
additionally using [svgo](https://www.npmjs.com/package/svgo). If this doesn't help either
[read this article](https://css-tricks.com/scale-svg/) about SVG scaling.

## Browser Support (tested)
- Chrome (63)
- Firefox (57)
- Safari 11
- Edge
- IE 11 (with polyfill, see below)

Check the [demo](https://jannicz.github.io/ng-svg-icon-sprite/) if it meets your requirements before using it.

### Polyfill for IE11 (and comparable)

Older browsers do not support referencing to (external) SVG symbols. To make it work for IE11 and lower you can add
[svg4everybody](https://github.com/jonathantneal/svg4everybody) to your `polyfills.ts` file:

```javascript
// Import and execute in polyfills.ts file
import * as svg4everybody from 'svg4everybody/dist/svg4everybody.js';
svg4everybody();
```

## Local development vs. npm package

For users that would like to clone/fork this repository: this repo contains all development files for the ng-icon-sprite
package while the [npm library](https://www.npmjs.com/package/ng-svg-icon-sprite) only includes the generated TypeScript package
in Angular package format. The latter was generated using [ng-packagr](https://www.npmjs.com/package/ng-packagr)
by running `ng-packagr -p ng-package.json`

## Author & License
- Jan Suwart | MIT License
