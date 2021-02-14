## Just press on Button and take a result from @lskjs/button. Or in reverse.
<!-- <p align="center"> -->
![](/blog/images/button.png)

## 🚀 Getting Started

<!-- ## Installation and usage -->

The easiest way to use is to install it from npm and build it into your app with Webpack.

```bash
npm install @lskjs/button
```

Then use it in your app:

```jsx
import Button from '@lskjs/button';

const App = (
  <Button variant="primary">Primary button</Button>
);
```

_For more examples and usage, please refer_

- [Tutorial](https://github.com/lskjs/ux/blob/master/blog/tutorial.md#2-%D0%BA%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D1%83-lskjsbutton-%D0%BD%D0%B0-cra-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3)

- [Storybook](https://lskjs.github.io/ux/?path=/story/button-button--paint)


## Props
- appearance // atlas
- variants = [ // bootstrap
  default
  primary
  secondary
  success
  warning
  danger
  info
  light
  dark
]
- views = [
   transparent
   text
]
- alternatives = [
  normal,
  outline,
  empty // link
]

- shape = [
  circle
]

- sizes = [xs, sm, md, lg, xl]

 - states = [ active, focusable, disabled] 

- colors={\{}}

See the [props documentation](https://lskjs.github.io/ux/styleguide/button) for complete documentation on the props react-select supports.

## Examples

```jsx
import Button from '@lskjs/button/Button';
import ButtonGroup from '@lskjs/button/ButtonGroup';

export default () => (
  <ButtonGroup>
    <Button variant="primary">Primary button</Button>
    <Button variant="outline-secondary">Secondary Button</Button>
    <Button as="input" type="submit" value="Submit Button" />
    <Button size="lg">Large Button</Button>
    <Button block>Block Button</Button>
    <Button active>Active Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
  </ButtonGroup>
)
 ```

See the [more examples](https://lskjs.github.io/ux/?path=/story/button-button--paint) in Storybook.

# Details
   
## Theme
1. change variants colors
2. new variants from theme

## HOCS
пока нету но скоро будет

- withFetch
- withState
- withRipple

## Cases

### Loading button
```js
// TODO: 
```

### Icon button
```js
// TODO: 
```

### Stateful button
```js
// TODO: 
```

## Next features
- ButtonGroup
- Dropdown
- Menu

## Links
- [Tutorial](https://github.com/lskjs/ux/blob/master/blog/tutorial.md#2-%D0%BA%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D1%83-lskjsbutton-%D0%BD%D0%B0-cra-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3)
- [Docs](https://lskjs.github.io/ux/styleguide/button)
- [Storybook](https://lskjs.github.io/ux/?path=/story/button-button--paint)
- [Changelog](./CHANGELOG.md)
- Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Inspired by
- https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Button.js
- https://react-bootstrap.netlify.com/components/buttons/#buttons
- https://atlaskit.atlassian.com/packages/core/button
- http://elemental-ui.com/buttons
- https://reakit.io/docs/button/
- https://ant.design/components/button/