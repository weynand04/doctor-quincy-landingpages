<template>
  <ContainerWidu>
    <div>
      <Subjudul subjudul="Page Component Helper for Construct This Website" />
    </div>
  </ContainerWidu>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";
import Subjudul from "../components/base/Judul";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Subjudul
  }
};
</script>