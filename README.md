# Lit-portable

This is simply a bundled version of the [Lit](https://lit.dev) library for web components, meant for consumption in modern browsers. Right now, only ```lit``` and ```lit/decorators.js``` are included.

The eventual goal is to have a library of cloud-based components which can be pulled down and used with nothing more than a simple line in an html file, and this library is the backbone of that effort.

## Ok, but why though?

Lit is a great library for producing standard web components, but the current workflow involves bundling the library with the components developed. For most websites, this is fine. If however, you want to deploy a lot of lit based elements on your page, this can result in a lot of redundant code being downloaded. With the advent of modern browsers and their native es module support, there is a better way. By splitting the library from the code, it only needs to be downladed once, speeding delivery and saving bandwidth. These effects can be further amplifed by pulling lit-portable from a solid CDN. A tertiary benefit can be observed in the form of caching when web components are updated; by keeping the library separate, only the updated component code need be re-downloaded. For more information, see Philip Walton's [excellent post](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/) on the subject.

As far as I, and the [first page](https://xkcd.com/1334/) of google results can tell, there is no official version of Lit bundled for this purpose at this time, and as browsers are incapable of node-style dependency resolution, trying to externally import the main lit library into a browser does not work.

## Ok, but ***why*** though?
Alright, consider the example from Lit's [own tutorial](https://lit.dev/tutorial/). To keep it simple, lets only look at the javascript version (use the little slider in the corner), no need to complicate with Typescript yet. The code it presents is:

```
import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}
customElements.define('my-element', MyElement);
```
Straightforward, elegant, blistering fast, and 100% es module (and therefore modern browser natively) compliant. Basically everything you love about Lit. Unfortunately, if you were to actually try to deploy it in a browser as written, it doesn't actually work. The reason is that whole ```import {LitElement, html} from 'lit';``` thing. Browsers are unable to resolve node dependencies, and have no way of figuring out what or where ```'lit'``` is.

Enter lit-portable. Take the same code, but with a minor substitition: 
```
import {LitElement, html} from './lit-portable.js';

class MyElement extends LitElement {
  static properties = {
    version: {},
  };

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}
customElements.define('my-element', MyElement);
```

Deployed as written, it works perfectly. In this example, we have lit-portable being served from the same host and directoy as the web component script, but that ```./lit-portable.js``` could also just as easily be ```<https://<YOUR_CDN_OF_CHOICE>/lit-portable.js```. This is where the savings come in for multiple components - for one web component on a page, there's no real difference if it's bundled like classic Lit web components or done using lit-portable. The component code and library are each downloaded once. If you have two different components on the page however, it definately matters. If you bundle the library to each component, each components code is downloaded once, and the library is downloaded twice - once for each element. Using lit-portable, each component's code is also downloaded once, but the library is only downloaded *once*.



## What is included?

As of now, the only components included are the core ```lit``` library, and ```lit/decorators.js``` (to ease typescript development). I'm trying to strike a balance between functionality and bundle size. Additional lit components (IE: ```lit/<something>.js```) *may* be included in the future if there is demand. There are no plans to ever include any of the lit labs.

## Should I be using lit-portable?

I say with all sincerity, if you have to ask, probably not. The OG Lit library has the workflow it has for a reason, and it has served them and the Lit community very well all this time. Lit-portable is admittedly targeted at a somewhat niche subset of the lit using community.

### Who should *not* be using lit-portable

- Anyone looking to contrubute to the core lit library itself
- Anyone looking to use lit in a server side application. Stick to lit.
- Anyone concerned with compatibility with older browsers. This is seriously an important factor for most developers, and lit-portable is unashamedly targeted at modern, ecma-module compliant browsers only. While polyfills will work on older browsers, you'll still have to re-bundle, and it pretty much negates anything lit-portable could add in terms of simplicity, speed, and performance.
- Anyone using a single lit-based web component. No size or speed savings to be had here, just use and bundle lit.

### Who might want to look at lit portable?

If you, on the other hand:
- Are certain that your userbase will be using modern, relatively up to date browsers
- Are deploying multiple lit-based components per page

then lit-portable might be for you.

## About this release

Lit-portable is 100% compatible with the equivalent version of lit.

### Versioning

The version of lit-portable will always follow that of the main lit library.

### What if I want to request features, report bugs, donate, or contribute?

Any and all requests, bug reports, donations, contributions, stars, or glory should go to the original lit team. While they do not oversee this project, again, lit portable will remain 100% compatible, and whenever lit releases a new version, so will I. I will not be independantly fixing bugs and breaking compatibility.

The only exception to this will be things specific to the bundle, ie: requests to add lit components to the bundle.

### What if lit releases an offical portable version?
Nothing would make me happier, and this project would cheerfully cease to exist.

## Are you affiliated with the Lit project?

Not in the slightest. Just a fan and user who has found himself wishing for an easily distributed lit bundle.

## Contributing

Contribute to [lit](https://lit.dev).
