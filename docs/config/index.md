---
layout: doc
---
# Basic Config

## target

- **Type:** `Element | string`

Id of the html element tag.

## api

- **Type:** `string`
- **available values**: `'qcc_open' | 'clearbit'`

Query data source.

## queryDelay

- **Type:** `number`
- **Default:** `500`

Query data delay.

## placeholder

- **Type:** `string`
- **Default:** `'请输入企业名称或统一社会信用代码'`

Input placeholder content.

## clearable

- **Type:** `boolean`
- **Default:** `true`

Show clear button.

## backFill

- **Type:** `boolean`
- **Default:** `false`

If backFill selected item the input when using keyboard.

## clearIcon

- **Type:** `string`
- **Default:** `'<svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>'`

Clear icon.

## autoFocus

- **Type:** `boolean`
- **Default:** `true`

Auto focus.

## searchUrl

- **Type:** `string`

Search query api url.

## avatarUrl

- **Type:** `string`

Avatar url.

## offsetTop

- **Type:** `number`
- **Default:** `5`

Pixels to offset from input bottom.

## autoFlip

- **Type:** `boolean`
- **Default:** `false`

Auto flip.

## showSubmitButton

- **Type:** `boolean`
- **Default:** `true`

Show submit button.

## submitButtonLabel

- **Type:** `string`
- **Default:** `'Submit''`

Submit button label.

## submitCallback

- **Type:** `Function`
- **Default:** `() => {}`

Submit callback.

## onFetch

- **Type:** `Function`
- **Default:** `() => {}`

Called when searching items.

## onSelect

- **Type:** `Function`
- **Default:** `() => {}`

Called when an option is selected. param is option's value.

## onClear

- **Type:** `Function`
- **Default:** `() => {}`

Called when clear.

## onFocus

- **Type:** `Function`
- **Default:** `() => {}`

Called when entering the component.

## onBlur

- **Type:** `Function`
- **Default:** `() => {}`

Called when leaving the component.

## onDropdownVisibleChange

- **Type:** `Function`
- **Default:** `() => {}`

Call when dropdown open.

## history

- **Type:** `Object`

History options.

### history.enabled

- **Type:** `boolean`
- **Default:** `true`

History enabled.

### history.type

- **Type:** `string`
- **available values**: `'localStorage' | 'sessionStorage'`

History save mode.

### history.key

- **Type:** `string`
- **Default:** `'company-history'`

History save key.

### history.showClear

- **Type:** `boolean`
- **Default:** `true`

Show clear history link.

### history.itemIcon

- **Type:** `string`

- **Default:** `'<svg viewBox="64 64 896 896" focusable="false" data-icon="history" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg>'`

History item icon.

### history.clearIcon

- **Type:** `string`
- **Default:** `'<svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>'`

Clear history link icon.
