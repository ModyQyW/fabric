<script setup lang="ts">
// https://github.com/Justin3go/justin3go.github.io/commit/13a08c192be464f2052efd8f1da9547d4184eede
// https://juejin.cn/post/7363078360786370599
import { nextTick, onMounted } from "vue";

defineOptions({
  name: "VAd",
});

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
onMounted(async () => {
  await nextTick(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    const div = document.querySelector("#google-ads");
    if (!div || div.querySelector("script")) return;
    div.append(script);
  });
});
/* eslint-enable */
</script>

<template>
  <div id="google-ads">
    <ins
      class="adsbygoogle"
      data-ad-client="ca-pub-3102250747488251"
      data-ad-format="auto"
      data-ad-slot="3708961821"
      data-full-width-responsive="true"
      style="display: block"
    ></ins>
  </div>
</template>

<style scoped>
#google-ads {
  padding: 12px;
  border-left: 1px solid var(--vp-c-divider);
}
</style>
