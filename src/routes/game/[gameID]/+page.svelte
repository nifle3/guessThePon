<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<div>
    <h1>{ data.title }</h1>
    <h1>{ data.content }</h1>
</div>