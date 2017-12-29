# SVG icon sprite package for Angular 4+

This [npm module](https://www.npmjs.com/package/ng-svg-icon-sprite) in Angular package format provides both
a solution for generating sprites and a component for including them.

## Installation

```
npm install ng-svg-icon-sprite --save
```

After installing the package you can import it into any application’s app.module.ts by simply including it in its @NgModule imports array:

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
<svg-icon-sprite [src]="'assets/sprites/sprite.svg#cart'" [width]="'100px'" [classes]="'some-icon-class'"></svg-icon-sprite>
```

## Options

- `src` icon source name, the syntax is `path/file#icon` where `path` is relative to app folder, `file` is
the name of the sprite and `icon` is the filename of the svg icon.
- `width` size of the svg in any unit, i.e. `32px`, `100%`, `auto`, etc.
- `height` optional, size of the svg - if undefined height and width will be equal
- `classes` optional, class name for this icon, default is `icon`

## Styling

Just add a CSS color property to the host component (the component invoking the svg-icon-sprite). The SVG component uses
the `currentColor` value to [pass the ancestor's color](https://css-tricks.com/cascading-svg-fill-color) through to the SVG shapes:

```css
color: red;
```

## Advanced Configuration

### Assets folder

If you have another folder structure than above, you can pass both your input and output path using the npm script:

```javascript
svg-symbols sourcefolder > destination/filename.svg
```

You can use any other "svg to symbol" library - the `ng-svg-icon-sprite` module is agnostic regarding the technology
behind the sprite generation.

### Custom Styling

To access inner SVG properties like fill or stroke, you need to use Angular's ::ng-deep (former `/deep/`) selector in
the parent component and select the `use` tag inside the SVG:

```css
// css of the parent component
::ng-deep svg.icon use {
  fill: orange;
}
```

or to access properties like height or width at the root of the svg:

```css
// css of the parent component
::ng-deep svg.icon {
  height: 85px;
  width: 85px;
}
```

## Sizing

Make sure your exported SVG file contains a viewbox and width or height properties. Otherwise the browser might
scale or size it unexpectedly:

```html
<svg width="18px" height="10px" viewBox="0 0 18 10" version="1.1">
  <g>
    ...
  </g>
</svg>
```

Still having trouble with scaling? [Read this article](https://css-tricks.com/scale-svg/).

### Local development vs. npm package

For users that would like to clone/fork this repository: this repo contains all development files for the ng-icon-sprite
package while the [npm library](https://www.npmjs.com/package/ng-svg-icon-sprite) only includes the TypeScript package
in Angular package format. The latter can be generated into a dist folder using [ng-packagr](https://www.npmjs.com/package/ng-packagr)
by running `ng-packagr -p ng-package.json`

## Author & License
- Jan Suwart | MIT License