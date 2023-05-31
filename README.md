# Ionicons 5 icons for deno / Preact

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://ionicons.com/](https://ionicons.com/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=io5)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/io5":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-io5@1.0.5/mod.ts",
    "react-icons/io5/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-io5@1.0.5/ico/",
  }
}
```

## Direct import sample

```ts
import { IoAccessibilityOutline } from "https://deno.land/x/react_icons_io5@1.0.5/mod.ts"
```

## import_map import sample

```ts
import { IoAccessibilityOutline } from "react-icons/io5"
```

## minimal import

```ts
import { IoAccessibilityOutline } from "react-icons/io5/IoAccessibilityOutline.ts"
```

## minimal import using default export

```ts
import IoAccessibilityOutline from "react-icons/io5/IoAccessibilityOutline.ts"
```

