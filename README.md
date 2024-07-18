# Ionicons 5 icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/io5)](https://jsr.io/@preact-icons/io5)

**License** [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)

**Project** [https://icons8.com/](https://icons8.com/)

[See available icons here](https://react-icons.deno.dev/io5)

## install the module

```bash
deno add @preact-icons/io5
dnpx jsr add @preact-icons/io5
pnpm dlx jsr add @preact-icons/io5
bunx jsr add @preact-icons/io5
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { IoAccessibilityOutline } from "@preact-icons/io5"
```

## import a single icon, downloading just one icon

```ts
import { IoAccessibilityOutline } from "react-icons/io5/IoAccessibilityOutline"
```

or using default export

```ts
import IoAccessibilityOutline from "react-icons/io5/IoAccessibilityOutline"
```
