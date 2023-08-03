---
layout: doc
---
# 示例

<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue';
import { CompanyAutocomplete } from '../../../src/main';

const app = getCurrentInstance();

const apiType = ref('clearbit');

onMounted(() => {
  new CompanyAutocomplete({
    api: 'clearbit',
    target: '#clearbit_input',
    autoFocus: true
  });
  new CompanyAutocomplete({
    api: 'qcc_open',
    target: '#qcc_open_input',
    autoFocus: true
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
