# Ionicons 5 icons for deno / Preact

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://icons8.com/](https://icons8.com/)

[See available icons here](https://react-icons.deno.dev/io5)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/io5":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-io5@1.0.10/mod.ts",
    "react-icons/io5/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-io5@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib io5

```ts
import { IoAccessibilityOutline } from "https://deno.land/x/react_icons_io5@1.0.10/mod.ts"
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

