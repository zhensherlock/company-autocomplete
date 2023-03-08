---
layout: doc
---
# Placeholder

<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { ref, getCurrentInstance, onMounted } from 'vue';
import { Plus, Warning } from '@element-plus/icons-vue';
import { FancyHolder } from '../../src';

const app = getCurrentInstance();

let textFancyHolder = null;

onMounted(() => {
  // text fancy holder
  textFancyHolder = new FancyHolder({
    target: '#input-company-autocomplete input'
  });
  textFancyHolder.create()
})
</script>

## Text Fancy Holder

<div id="input-fancy-holder">
  <el-input placeholder="Please input" />
</div>

```js
import { BlindWatermark } from 'watermark-js-plus' // import watermark plugin

const watermark = new BlindWatermark({
  content: 'hello my watermark',
  width: 200,
  height: 200,
  onSuccess: () => {
    // success callback
  }
})

watermark.create() // add watermark

watermark.destroy() // remove watermark
```
<el-space>
  <VPButton text="Add Text Blind Watermark" @click="handleAddTextBlindWatermark"></VPButton>
  <VPButton text="Remove Text Blind Watermark" @click="handleRemoveTextBlindWatermark"></VPButton>
</el-space>
