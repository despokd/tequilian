---
title: 'Redirect 301 in SvelteKit'
date: 2022-03-29
tags: ['Svelte', 'SvelteKit', 'Redirect']
---

```Svelte
<script context="module">
 export async function load() {
  return {
   status: 301,
   redirect: '../new-url'
  };
 }
</script>

```

or

```Svelte
<script>
    import { redirect } from 'svelte-routing';
    import { get } from 'svelte/store';

    const url = get(store.url);
    const params = get(store.params);

    const redirect301 = () => {
        redirect(301, url, params);
    };
</script>
```
