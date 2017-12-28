# SVG-Icon-Sprite Package for Angular (4.x+)

## Installation

## Usage

## Styling
The SVG component uses the currentColor value in CSS to [pass the ancestor's color](https://css-tricks.com/cascading-svg-fill-color) through to the SVG shapes:

```css
h1 {
  color: blue;
}
h1 svg {
  fill: currentColor;
}
```

To access other SVG properties than color or height, i.e. if you would like to access certain SVG shapes like circle,
polygon etc., you need to use Angular's ::ng-deep (former /deep/) selector in the parent component:

```css
// Parent component styles
div ::ng-deep .some-icon-class use {
  fill: orange;
}
```

or

```css
ul ::ng-deep .some-icon-class {
  height: 85px;
  width: 85px;
}
```

## Assets folder

The default folder for the source svg icons is `src/app/assets/icons` - the default output for the generated sprite will be 'src/app/assets/sprites'.
If you have another folder structure, you can pass both your input and output path using the npm script:

```javascript
svg-symbols ./src/assets/icons > ./src/assets/sprites/svg-sprite.svg
```

__Note:__ you need to create the sprites directory before running the npm script (for svg sprite creation)

## Local Development vs. Package

This git repository contains all development files for the ng-icon-sprite package while npm library only includes the
TypeScript library in Angular package format. The latter can be generated into a dist folder using ng-packagr (https://www.npmjs.com/package/ng-packagr)
by running ng-packagr -p ng-package.json

## Author & License
- Jan Suwart | MIT License