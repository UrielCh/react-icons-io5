# Ionicons 5 icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/io5)](https://jsr.io/@preact-icons/io5)

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://icons8.com/](https://icons8.com/)

[See available icons here](https://react-icons.deno.dev/io5)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/io5": "jsr:@preact-icons/io5@^1.0.11/mod.ts",
    "react-icons/io5/": "jsr:@preact-icons/io5@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib io5

```ts
import { IoAccessibilityOutline } from "jsr:preact-icons/io5@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { IoAccessibilityOutline } from "react-icons/io5"
```

## import a single icon, downloading just one icon

```ts
import { IoAccessibilityOutline } from "react-icons/io5/IoAccessibilityOutline.ts"
```

or using default export

```ts
import IoAccessibilityOutline from "react-icons/io5/IoAccessibilityOutline.ts"
```

