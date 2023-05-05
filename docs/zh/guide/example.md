---
layout: doc
---
# 示例

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue';
import { CompanyAutocomplete } from '../../../src/main';

const app = getCurrentInstance();

let companyAutocomplete = null;

onMounted(() => {
  companyAutocomplete = new CompanyAutocomplete({
    target: '#example_ca'
  });
})
</script>

## 常规用法
<div id="example_ca">
</div>

```js
import { CompanyAutocomplete } from 'company-autocomplete' 

const companyAutocomplete = new CompanyAutocomplete({
  target: '#example'
})
```
