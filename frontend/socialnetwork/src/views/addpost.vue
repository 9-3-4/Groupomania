<template>
    <div class="Addpost">
        
        <editpost/>
    </div>
</template>

<script>

import editpost from '@/components/editpost.vue';

export default {
    name: 'addpost',
  components: {
      editpost,
  },
}
</script>