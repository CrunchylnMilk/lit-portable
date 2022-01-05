# Lit-portable

This is simply a bundled version of the [lit](https://lit.dev) library, meant for consumption in modern browsers. Right now, ```lit``` and ```lit/decorators.js``` are included.

## Ok, but why though?

Lit is a great library for producing standard web components, but the current workflow involves bundling the library with the components developed. For most websites, this is fine. If however, you want to deploy a lot of lit based elements on your page, this can result in a lot of redundant code being downloaded. By splitting the library from the code, it only needs to be downladed once, speeding delivery and saving bandwidth. These effects can be further amplifed by pulling lit-portable from a solid CDN.

As far as I, and the first page of google results can tell, there is no official version of lit bundled for this purpose at this time, and as browsers are incapable of node-style dependency resolution at this time, trying to externally import the main lit library into a browser does not work.

## What is included?

As of now, the only components included are the core lit library, and lit/decorators.js (to ease typescript development). I'm trying to strike a balance between functionality and bundle size. Additional lit components (IE: ```lit/<something>.js```) *may* be included in the future if there is demand. There are no plans to ever include any of the lit labs.

## Should I be using lit-portable?

I say with all sincerity, if you have to ask, probably not. The main lit library has the workflow it has for a reason, and it has served them, and the community very well all this time. Lit-portable is admittedly targeted at a somewhat niche subset of the lit using community.

### Who should *not* be using lit-portable

- Anyone looking to contrubute to the core lit library itself
- Anyone looking to use lit in a server side application. Stick to lit.
- Anyone concerned with compatibility with older browsers. This is seriously an important factor for most developers, and lit-portable is unashamedly targeted at modern, ecma-module compliant browsers only. While polyfills will work on older browsers, you'll still have to re-bundle, and it pretty much negates anything lit-portable could add in terms of simplicity, speed, and performance.
- Anyone using a single lit-based web component. No size or speed savings to be had here, just use and bundle lit.

### Who might want to look at lit portable?

If you, on the other hand:
- Are certain that your userbase will be using modern, relatively up to date browsers
- Are deploying multiple lit-based components

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
