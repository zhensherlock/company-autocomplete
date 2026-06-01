---
layout: doc
---
# 示例

<script setup lang="ts">
import { onMounted } from 'vue';
import { CompanyAutocomplete } from '../../../src/main';

onMounted(() => {
  new CompanyAutocomplete({
    api: 'clearbit',
    target: '#clearbit_input',
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
