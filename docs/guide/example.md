---
layout: doc
---
# Example

<script setup lang="ts">
import { onMounted } from 'vue';
import { CompanyAutocomplete } from '../../src/main';

onMounted(() => {
  new CompanyAutocomplete({
    api: 'clearbit',
    target: '#clearbit_input',
    autoFocus: true,
    // submitCallback: ({ company, text }) => {
    //   console.log(company, text)
    // },
    // onFocus: () => {
    //   console.log('onFocus')
    // },
    // onBlur: () => {
    //   console.log('onBlur')
    // },
    // onDropdownVisibleChange: (open) => {
    //   console.log('onDropdownVisibleChange', open)
    // }
    // avatarUrl: 'https://example.com/company-logo/{id}'
  });
})
</script>

## ClearBit API
<div id="clearbit_input">
</div>

```js
import { CompanyAutocomplete } from 'company-autocomplete' 

const companyAutocomplete = new CompanyAutocomplete({
  api: 'clearbit',
  target: '#example'
})
```
