---
layout: doc
---
# Example

<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue';
import { CompanyAutocomplete } from '../../src/main';

const app = getCurrentInstance();

const apiType = ref('clearbit');

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
    // searchUrl: 'https://api-company.starmaverick.repl.co/qcc/search/{keyword}',
    // avatarUrl: 'https://api-company.starmaverick.repl.co/qcc/logo/{id}'
  });
  new CompanyAutocomplete({
    api: 'qcc_open',
    target: '#qcc_open_input',
    autoFocus: false
  });

  new CompanyAutocomplete({
    api: 'qcc_global',
    target: '#qcc_global_input',
    autoFocus: false
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

## QCC Open API
<div id="qcc_open_input">
</div>

```js
import { CompanyAutocomplete } from 'company-autocomplete' 

const companyAutocomplete = new CompanyAutocomplete({
  api: 'qcc_open',
  target: '#example'
})
```

## QCC Global API
<div id="qcc_global_input">
</div>

```js
import { CompanyAutocomplete } from 'company-autocomplete' 

const companyAutocomplete = new CompanyAutocomplete({
  api: 'qcc_global',
  target: '#example'
})
```
