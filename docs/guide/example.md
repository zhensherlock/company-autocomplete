---
layout: doc
---
# Example

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
import { CompanyAutocomplete } from '../../src/main';

const app = getCurrentInstance();

let companyAutocomplete = null;

onMounted(() => {
  companyAutocomplete = new CompanyAutocomplete({
    target: '#example_ca',
    searchUrl: 'https://api-company.starmaverick.repl.co/qcc/search/{keyword}',
    avatarUrl: 'https://api-company.starmaverick.repl.co/qcc/logo/{id}'
  });
})
</script>

## General
<div id="example_ca">
</div>

```js
import { CompanyAutocomplete } from 'company-autocomplete' 

const companyAutocomplete = new CompanyAutocomplete({
  target: '#example'
})
```
